import React from 'react';
import { MapPin, Phone, ShieldCheck, Heart } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SHAHJAHANPUR_LOCALITIES, TRADES_LIST } from '../data/initialData';
import { ShahjahanpurLocality, TradeId } from '../types';

interface FooterProps {
  currentLang: Language;
  onSelectTrade: (trade: TradeId) => void;
  onSelectLocality: (loc: ShahjahanpurLocality) => void;
  onOpenArtisanRegister: () => void;
  onOpenPostJob: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onSelectTrade,
  onSelectLocality,
  onOpenArtisanRegister,
  onOpenPostJob,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Wordmark & Local Statement */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-500/30">
                SPN
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {t.brandName}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.footerAboutDesc}
            </p>
            <div className="pt-2 text-xs text-amber-400/90 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>100% नि:शुल्क स्थानीय जनसेवा पहल</span>
            </div>
          </div>

          {/* Column 2: Popular Trades */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footerQuickLinks}
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {TRADES_LIST.slice(0, 6).map((tr) => (
                <li key={tr.id}>
                  <button
                    onClick={() => {
                      onSelectTrade(tr.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    {tr.nameHi} ({tr.nameEn})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Shahjahanpur Localities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footerAreas}
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-stone-400">
              {SHAHJAHANPUR_LOCALITIES.slice(1, 11).map((loc) => {
                const label = loc.split('(')[0].trim();
                return (
                  <button
                    key={loc}
                    onClick={() => {
                      onSelectLocality(loc);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 hover:border-stone-700 hover:text-white transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 4: Quick Portals & Help */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              त्वरित पंजीकरण
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenArtisanRegister}
                className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors text-center cursor-pointer"
              >
                कारीगर पंजीकरण करें
              </button>
              <button
                onClick={onOpenPostJob}
                className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors text-center cursor-pointer"
              >
                काम की जरूरत पोस्ट करें
              </button>
            </div>
            <div className="pt-2 text-[11px] text-stone-400">
              <span>शाहजहांपुर हेल्पलाइन व सहायता के लिए: </span>
              <a href="tel:18001805145" className="text-amber-400 underline font-mono">
                1800-180-5145 (टोल फ्री)
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>{t.footerCopy}</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>शाहजहांपुर, उत्तर प्रदेश के शिल्पकारों को समर्पित</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
