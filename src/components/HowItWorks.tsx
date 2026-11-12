import React from 'react';
import { Search, PhoneCall, UserCheck, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HowItWorksProps {
  currentLang: Language;
  onOpenArtisanRegister: () => void;
  onOpenPostJob: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  currentLang,
  onOpenArtisanRegister,
  onOpenPostJob,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>सरल व पारदर्शी प्रक्रिया</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            {t.howItWorksTitle}
          </h2>
          <p className="text-sm text-stone-600">
            शाहजहांपुर के मेहनतकश कारीगरों और नागरिकों के बीच सीधा सेतु — न कोई बिचौलिया, न कोई अतिरिक्त शुल्क।
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 space-y-3 relative hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 font-bold flex items-center justify-center text-sm font-mono">
              01
            </div>
            <h3 className="text-base font-bold text-stone-900">
              {t.howStep1Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.howStep1Desc}
            </p>
            <div className="pt-2 text-xs text-amber-800 font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>टाउन हॉल से लेकर पुवायां व तिलहर तक</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 space-y-3 relative hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 font-bold flex items-center justify-center text-sm font-mono">
              02
            </div>
            <h3 className="text-base font-bold text-stone-900">
              {t.howStep2Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.howStep2Desc}
            </p>
            <div className="pt-2 text-xs text-emerald-800 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>0% कमीशन, सीधा कारीगर को भुगतान</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 space-y-3 relative hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-400 font-bold flex items-center justify-center text-sm font-mono">
              03
            </div>
            <h3 className="text-base font-bold text-stone-900">
              {t.howStep3Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.howStep3Desc}
            </p>
            <div className="pt-2 text-xs text-stone-700 font-medium flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-stone-500" />
              <span>कारीगर व ग्राहक दोनों के लिए खुला</span>
            </div>
          </div>

        </div>

        {/* Dual Registration CTA Strip */}
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              क्या आप शाहजहांपुर में काम करते हैं या काम करवाना चाहते हैं?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              आज ही अपना निःशुल्क पंजीकरण करें और शाहजहांपुर के सबसे बड़े कारीगर नेटवर्क से जुड़ें।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenArtisanRegister}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer"
            >
              कारीगर पंजीकरण (Register Skill)
            </button>
            <button
              onClick={onOpenPostJob}
              className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white border border-stone-700 font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer"
            >
              काम की जरूरत पोस्ट करें
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
