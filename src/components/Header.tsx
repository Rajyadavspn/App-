import React, { useState } from 'react';
import { Briefcase, UserCheck, Menu, X, PlusCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: 'artisans' | 'jobs' | 'how';
  onTabChange: (tab: 'artisans' | 'jobs' | 'how') => void;
  onOpenArtisanRegister: () => void;
  onOpenPostJob: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  onOpenArtisanRegister,
  onOpenPostJob,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  return (
    <header className="sticky top-0 z-40 bg-stone-900 border-b border-stone-800 text-stone-100 backdrop-blur-md">
      {/* Strict 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Text Element Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg">
            <span>SPN</span>
          </div>
          <button
            onClick={() => onTabChange('artisans')}
            className="text-left cursor-pointer group"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 block">
              {t.brandName}
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (single-line, 4 items) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
          <button
            onClick={() => {
              onTabChange('artisans');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'artisans'
                ? 'text-amber-400 border-amber-400'
                : 'text-stone-300 hover:text-white border-transparent'
            }`}
          >
            {t.navFind}
          </button>

          <button
            onClick={() => {
              onTabChange('jobs');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'jobs'
                ? 'text-amber-400 border-amber-400'
                : 'text-stone-300 hover:text-white border-transparent'
            }`}
          >
            {t.navJobs}
          </button>

          <button
            onClick={() => {
              onTabChange('how');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'how'
                ? 'text-amber-400 border-amber-400'
                : 'text-stone-300 hover:text-white border-transparent'
            }`}
          >
            {t.navHow}
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <div className="flex items-center rounded-lg border border-stone-700 bg-stone-800 p-0.5 text-xs">
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                currentLang === 'hi'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Secondary Job Post Button on desktop */}
          <button
            onClick={onOpenPostJob}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.btnPostJob}</span>
          </button>

          {/* Primary CTA Button: Worker Registration */}
          <button
            onClick={onOpenArtisanRegister}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <UserCheck className="w-4 h-4" />
            <span>{t.btnRegisterWorker}</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-900 px-4 py-3 space-y-2">
          <button
            onClick={() => {
              onTabChange('artisans');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${
              activeTab === 'artisans'
                ? 'bg-amber-500/10 text-amber-400'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            {t.navFind}
          </button>
          <button
            onClick={() => {
              onTabChange('jobs');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${
              activeTab === 'jobs'
                ? 'bg-amber-500/10 text-amber-400'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            {t.navJobs}
          </button>
          <button
            onClick={() => {
              onTabChange('how');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${
              activeTab === 'how'
                ? 'bg-amber-500/10 text-amber-400'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            {t.navHow}
          </button>

          <div className="pt-2 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenPostJob();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-stone-800 text-stone-200 text-sm font-medium"
            >
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>{t.btnPostJob}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
