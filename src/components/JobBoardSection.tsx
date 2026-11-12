import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  IndianRupee, 
  PlusCircle, 
  User, 
  CheckCircle,
  Filter
} from 'lucide-react';
import { JobPost, ShahjahanpurLocality, TradeId } from '../types';
import { SHAHJAHANPUR_LOCALITIES, TRADES_LIST } from '../data/initialData';
import { Language, TRANSLATIONS } from '../data/translations';

interface JobBoardSectionProps {
  currentLang: Language;
  jobPosts: JobPost[];
  onOpenPostJob: () => void;
  onApplyForJob?: (job: JobPost) => void;
}

export const JobBoardSection: React.FC<JobBoardSectionProps> = ({
  currentLang,
  jobPosts,
  onOpenPostJob,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [selectedTrade, setSelectedTrade] = useState<TradeId | 'all'>('all');
  const [selectedLocality, setSelectedLocality] = useState<ShahjahanpurLocality>('All');

  const filteredJobs = jobPosts.filter((job) => {
    if (selectedTrade !== 'all' && job.tradeNeeded !== selectedTrade) {
      return false;
    }
    if (selectedLocality !== 'All' && job.locality !== selectedLocality) {
      return false;
    }
    return true;
  });

  const getUrgencyBadge = (urgency: JobPost['urgency']) => {
    if (urgency === 'urgent_today') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
          <Clock className="w-3 h-3 text-rose-600" />
          <span>{currentLang === 'hi' ? 'आज ही जरूरी' : 'Urgent Today'}</span>
        </span>
      );
    }
    if (urgency === 'this_week') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
          <Clock className="w-3 h-3 text-amber-600" />
          <span>{currentLang === 'hi' ? 'इस हफ्ते' : 'This Week'}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[11px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
        <span>{currentLang === 'hi' ? 'तय कर सकते हैं' : 'Flexible'}</span>
      </span>
    );
  };

  return (
    <div className="py-8 bg-stone-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header Strip with Primary Post Job Action */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>शाहजहांपुर रोजगार व काम बोर्ड</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              {t.jobBoardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              {t.jobBoardSubtitle}
            </p>
          </div>

          <button
            onClick={onOpenPostJob}
            className="self-start md:self-center inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-amber-400" />
            <span>{t.btnPostJob}</span>
          </button>
        </div>

        {/* Filters for Job Board */}
        <div className="bg-white p-3.5 rounded-xl border border-stone-200 flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 font-semibold text-stone-700">
            <Filter className="w-3.5 h-3.5 text-stone-500" />
            <span>फिल्टर:</span>
          </div>

          {/* Trade Filter */}
          <select
            value={selectedTrade}
            onChange={(e) => setSelectedTrade(e.target.value as TradeId | 'all')}
            className="px-3 py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            <option value="all">सभी काम की जरूरतें</option>
            {TRADES_LIST.map((tr) => (
              <option key={tr.id} value={tr.id}>
                {tr.nameHi}
              </option>
            ))}
          </select>

          {/* Locality Filter */}
          <select
            value={selectedLocality}
            onChange={(e) => setSelectedLocality(e.target.value as ShahjahanpurLocality)}
            className="px-3 py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            <option value="All">शाहजहांपुर के सभी इलाके</option>
            {SHAHJAHANPUR_LOCALITIES.filter((l) => l !== 'All').map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <span className="text-stone-500 ml-auto font-mono tabular-nums">
            {filteredJobs.length} काम उपलब्ध
          </span>
        </div>

        {/* Jobs List */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-xl border border-stone-200 p-8 text-center space-y-3">
            <Briefcase className="w-10 h-10 text-stone-400 mx-auto stroke-1" />
            <h3 className="text-base font-bold text-stone-900">
              इस कैटेगरी या इलाके में अभी कोई खुला काम दर्ज नहीं है
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              क्या आपको किसी बढ़ई, लोहार, नाई या प्लंबर की जरूरत है? आप स्वयं अपना काम पोस्ट कर सकते हैं।
            </p>
            <button
              onClick={onOpenPostJob}
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-stone-950 font-bold text-xs rounded-lg hover:bg-amber-400 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>काम की जरूरत पोस्ट करें</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.map((job) => {
              const waText = encodeURIComponent(
                `नमस्ते ${job.customerName} जी, मैंने शाहजहांपुर कारीगर सेवा पर आपकी जॉब पोस्ट देखी है: "${job.title}"। मैं यह काम कर सकता हूँ। कृपया बात करें।`
              );

              return (
                <div
                  key={job.id}
                  className="bg-white rounded-xl border border-stone-200 p-4 sm:p-5 flex flex-col justify-between hover:border-stone-400 transition-all space-y-4 shadow-xs"
                >
                  <div className="space-y-2.5">
                    
                    {/* Top Row: Trade & Urgency */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-stone-500">
                        <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          {job.tradeTitleHi}
                        </span>
                        <span>·</span>
                        <span className="font-mono">{job.postedAt}</span>
                      </div>
                      {getUrgencyBadge(job.urgency)}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-stone-900 leading-snug">
                      {job.title}
                    </h3>

                    {/* Locality */}
                    <div className="flex items-center gap-1 text-xs text-stone-600">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{job.locality}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-stone-700 leading-relaxed line-clamp-3">
                      {job.description}
                    </p>

                    {/* Customer info & Budget */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-stone-700">
                        <User className="w-3.5 h-3.5 text-stone-400" />
                        <span className="font-medium">{job.customerName}</span>
                      </div>
                      <div className="font-mono tabular-nums">
                        <span className="text-stone-500 mr-1">अनुमानित बजट:</span>
                        <span className="font-bold text-emerald-700">₹{job.budgetInr}</span>
                      </div>
                    </div>

                  </div>

                  {/* Actions: Call & WhatsApp */}
                  <div className="pt-2 border-t border-stone-100 grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${job.customerPhone}`}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>ग्राहक को कॉल करें</span>
                    </a>

                    <a
                      href={`https://wa.me/91${job.customerWhatsapp || job.customerPhone}?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>व्हाट्सएप</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
