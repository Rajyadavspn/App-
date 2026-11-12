import React from 'react';
import { Search, MapPin, Briefcase, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SHAHJAHANPUR_LOCALITIES, TRADES_LIST } from '../data/initialData';
import { ShahjahanpurLocality, TradeId } from '../types';

interface HeroSectionProps {
  currentLang: Language;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedLocality: ShahjahanpurLocality;
  onLocalityChange: (loc: ShahjahanpurLocality) => void;
  selectedTrade: TradeId | 'all';
  onTradeChange: (trade: TradeId | 'all') => void;
  onSearchSubmit: () => void;
  onQuickSelectTrade: (trade: TradeId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  searchQuery,
  onSearchChange,
  selectedLocality,
  onLocalityChange,
  selectedTrade,
  onTradeChange,
  onSearchSubmit,
  onQuickSelectTrade,
}) => {
  const t = TRANSLATIONS[currentLang];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  return (
    <div className="relative bg-stone-900 border-b border-stone-800 text-stone-100 overflow-hidden">
      {/* Background visual overlay with measured scrim */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="/src/assets/images/spn_artisan_hero_1794325420444.jpg"
          alt="शाहजहांपुर कारीगर कार्यशाला"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-stone-950/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context location indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>शाहजहांपुर, उत्तर प्रदेश (Shahjahanpur, UP)</span>
              <span className="text-amber-500/60">·</span>
              <span>सीधा संपर्क</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              {t.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              {t.heroTagline}
            </p>

            {/* Quick popular trades shortcuts */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-stone-400 font-medium">लोकप्रिय काम:</span>
              <button
                onClick={() => onQuickSelectTrade('carpenter')}
                className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors cursor-pointer"
              >
                बढ़ई / कारपेंटर
              </button>
              <button
                onClick={() => onQuickSelectTrade('blacksmith')}
                className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors cursor-pointer"
              >
                लोहार / वेल्डर
              </button>
              <button
                onClick={() => onQuickSelectTrade('barber')}
                className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors cursor-pointer"
              >
                नाई / सैलून
              </button>
              <button
                onClick={() => onQuickSelectTrade('plumber')}
                className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors cursor-pointer"
              >
                प्लंबर
              </button>
              <button
                onClick={() => onQuickSelectTrade('electrician')}
                className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors cursor-pointer"
              >
                इलेक्ट्रीशियन
              </button>
            </div>

            {/* Search Box Card */}
            <div className="bg-stone-800/90 border border-stone-700 rounded-xl p-3 sm:p-4 shadow-xl backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                
                {/* Search Text Input */}
                <div className="sm:col-span-5 relative">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t.searchPlaceholder}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Trade Category Dropdown */}
                <div className="sm:col-span-3 relative">
                  <Briefcase className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedTrade}
                    onChange={(e) => onTradeChange(e.target.value as TradeId | 'all')}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-400 appearance-none cursor-pointer"
                  >
                    <option value="all">{t.selectTrade}</option>
                    {TRADES_LIST.map((tr) => (
                      <option key={tr.id} value={tr.id}>
                        {currentLang === 'hi' ? tr.nameHi : tr.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Locality Dropdown */}
                <div className="sm:col-span-4 relative">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedLocality}
                    onChange={(e) => onLocalityChange(e.target.value as ShahjahanpurLocality)}
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-400 appearance-none cursor-pointer"
                  >
                    <option value="All">{t.selectLocality}</option>
                    {SHAHJAHANPUR_LOCALITIES.filter((l) => l !== 'All').map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Submit CTA row */}
              <div className="mt-3 flex items-center justify-between gap-3 pt-2 border-t border-stone-700/60">
                <div className="hidden sm:flex items-center gap-2 text-xs text-stone-400">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>स्थानीय स्तर पर सत्यापित फोन नंबर व अनुभव</span>
                </div>
                <button
                  onClick={onSearchSubmit}
                  className="w-full sm:w-auto px-6 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Search className="w-4 h-4" />
                  <span>{t.btnSearch}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Photo Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-stone-700 shadow-2xl bg-stone-800">
              <img
                src="/src/assets/images/spn_artisan_hero_1794325420444.jpg"
                alt="शाहजहांपुर कारीगर"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  शाहजहांपुर कारीगर समुदाय
                </span>
                <p className="text-white font-medium text-sm leading-snug">
                  "हमारे हुनर को मिली पहचान, शाहजहांपुर के घर-घर पहुंचा हमारा काम।"
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs text-stone-300">
                  <span>टाउन हॉल · रोजा · पुवायां · तिलहर</span>
                  <span>·</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% सत्यापित
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Tabular Numerals Proof Strip */}
        <div className="mt-10 pt-6 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-400">450+</span>
            <div className="text-xs sm:text-sm text-stone-300 leading-tight">
              <p className="font-semibold text-white">पंजीकृत कारीगर</p>
              <p className="text-stone-400">बढ़ई, लोहार, नाई, मिस्त्री आदि</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-amber-400">19</span>
            <div className="text-xs sm:text-sm text-stone-300 leading-tight">
              <p className="font-semibold text-white">शाहजहांपुर इलाके व तहसीलें</p>
              <p className="text-stone-400">शहर से लेकर ग्रामीण क्षेत्रों तक</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-emerald-400">₹0</span>
            <div className="text-xs sm:text-sm text-stone-300 leading-tight">
              <p className="font-semibold text-white">कमीशन मुक्त सेवा</p>
              <p className="text-stone-400">सीधा कारीगर के खाते में भुगतान</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
