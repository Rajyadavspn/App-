import React, { useState } from 'react';
import { X, Briefcase, CheckCircle2, Clock, MapPin, IndianRupee } from 'lucide-react';
import { JobPost, ShahjahanpurLocality, TradeId } from '../types';
import { SHAHJAHANPUR_LOCALITIES, TRADES_LIST } from '../data/initialData';
import { Language } from '../data/translations';

interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onPostSuccess: (newJob: JobPost) => void;
}

export const PostJobModal: React.FC<PostJobModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onPostSuccess,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerWhatsapp, setCustomerWhatsapp] = useState('');
  const [tradeNeeded, setTradeNeeded] = useState<TradeId>('carpenter');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [locality, setLocality] = useState<ShahjahanpurLocality>('टाउन हॉल (Town Hall)');
  const [budgetInr, setBudgetInr] = useState(2000);
  const [urgency, setUrgency] = useState<'urgent_today' | 'this_week' | 'flexible'>('urgent_today');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !title.trim()) return;

    const selectedTradeMeta = TRADES_LIST.find((t) => t.id === tradeNeeded);

    const newJob: JobPost = {
      id: `job-user-${Date.now()}`,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerWhatsapp: customerWhatsapp.trim() || customerPhone.trim(),
      tradeNeeded,
      tradeTitleHi: selectedTradeMeta ? selectedTradeMeta.nameHi : 'कारीगर की जरूरत',
      title: title.trim(),
      description: description.trim(),
      locality,
      budgetInr: Number(budgetInr) || 1000,
      urgency,
      postedAt: 'अभी-अभी',
      status: 'open',
    };

    onPostSuccess(newJob);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-stone-900 px-6 py-4 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                काम की जरूरत पोस्ट करें (फ्री रजिस्ट्रेशन)
              </h3>
              <p className="text-xs text-stone-400">
                शाहजहांपुर के योग्य कारीगर आपसे सीधे संपर्क करेंगे
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-stone-900">
                काम की जरूरत सफलतापूर्वक पोस्ट हो गई!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                शाहजहांपुर के संबंधित कारीगरों को आपकी यह पोस्ट दिख रही है और वे शीघ्र ही आपको कॉल या मैसेज करेंगे।
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Customer Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">आपका शुभ नाम *</label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. अमित सक्सेना / सरदार हरजीत सिंह"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">मोबाइल नंबर *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10 अंकों का फोन नंबर"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 font-mono"
                  />
                </div>
              </div>

              {/* Trade Needed & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">किस कारीगर की जरूरत है? *</label>
                  <select
                    value={tradeNeeded}
                    onChange={(e) => setTradeNeeded(e.target.value as TradeId)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                  >
                    {TRADES_LIST.map((tr) => (
                      <option key={tr.id} value={tr.id}>
                        {tr.nameHi} ({tr.nameEn})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">शाहजहांपुर में आपका इलाका *</label>
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value as ShahjahanpurLocality)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                  >
                    {SHAHJAHANPUR_LOCALITIES.filter((l) => l !== 'All').map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Title of Work */}
              <div className="space-y-1">
                <label className="font-semibold text-stone-800">काम का शीर्षक (Short Title) *</label>
                <input
                  type="text"
                  required
                  placeholder="उदा. 2 कमरों के लिए लकड़ी की अलमारी बनवानी है"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                />
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="font-semibold text-stone-800">काम का विस्तृत विवरण</label>
                <textarea
                  rows={3}
                  required
                  placeholder="काम क्या है, कितने दिन का काम है, सामान आप देंगे या कारीगर लाएगा..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                />
              </div>

              {/* Budget & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">अनुमानित बजट (₹)</label>
                  <input
                    type="number"
                    step="100"
                    placeholder="उदा. 2500"
                    value={budgetInr}
                    onChange={(e) => setBudgetInr(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">काम कब शुरू करना है?</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value as 'urgent_today' | 'this_week' | 'flexible')}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                  >
                    <option value="urgent_today">आज ही जरूरी (Urgent Today)</option>
                    <option value="this_week">इस हफ्ते (Within 2-4 days)</option>
                    <option value="flexible">समय तय कर सकते हैं (Flexible)</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-stone-600 hover:text-stone-900 font-medium cursor-pointer"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>काम पोस्ट करें</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
