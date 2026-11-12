/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TradeFilterBar } from './components/TradeFilterBar';
import { LocalityFilterBar } from './components/LocalityFilterBar';
import { ArtisanCard } from './components/ArtisanCard';
import { ArtisanDetailModal } from './components/ArtisanDetailModal';
import { RegisterArtisanModal } from './components/RegisterArtisanModal';
import { PostJobModal } from './components/PostJobModal';
import { BookingModal } from './components/BookingModal';
import { JobBoardSection } from './components/JobBoardSection';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

import { INITIAL_ARTISANS, INITIAL_JOB_POSTS } from './data/initialData';
import { Artisan, BookingRequest, JobPost, Review, ShahjahanpurLocality, TradeId } from './types';
import { Language, TRANSLATIONS } from './data/translations';
import { 
  Users, 
  Search, 
  MapPin, 
  PlusCircle, 
  Sparkles, 
  CheckCircle,
  Briefcase
} from 'lucide-react';

const STORAGE_KEY_ARTISANS = 'spn_artisans_data_v1';
const STORAGE_KEY_JOBS = 'spn_jobposts_data_v1';
const STORAGE_KEY_BOOKINGS = 'spn_bookings_data_v1';
const STORAGE_KEY_LANG = 'spn_lang_pref_v1';

export default function App() {
  // Language Preference (default: Hindi)
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_LANG);
    return saved === 'en' ? 'en' : 'hi';
  });

  const t = TRANSLATIONS[currentLang];

  // Artisans State (persisted to localStorage)
  const [artisans, setArtisans] = useState<Artisan[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_ARTISANS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved artisans:', e);
      }
    }
    return INITIAL_ARTISANS;
  });

  // Job Posts State (persisted to localStorage)
  const [jobPosts, setJobPosts] = useState<JobPost[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_JOBS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved jobs:', e);
      }
    }
    return INITIAL_JOB_POSTS;
  });

  // Bookings state
  const [bookings, setBookings] = useState<BookingRequest[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_BOOKINGS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved bookings:', e);
      }
    }
    return [];
  });

  // Active View Tab
  const [activeTab, setActiveTab] = useState<'artisans' | 'jobs' | 'how'>('artisans');

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrade, setSelectedTrade] = useState<TradeId | 'all'>('all');
  const [selectedLocality, setSelectedLocality] = useState<ShahjahanpurLocality>('All');
  const [filterAvailableNow, setFilterAvailableNow] = useState(false);
  const [filterVerifiedOnly, setFilterVerifiedOnly] = useState(false);
  const [filterTopRated, setFilterTopRated] = useState(false);

  // Modals
  const [isArtisanRegisterOpen, setIsArtisanRegisterOpen] = useState(false);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [selectedArtisanForModal, setSelectedArtisanForModal] = useState<Artisan | null>(null);
  const [selectedArtisanForBooking, setSelectedArtisanForBooking] = useState<Artisan | null>(null);

  // Success Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ARTISANS, JSON.stringify(artisans));
  }, [artisans]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_JOBS, JSON.stringify(jobPosts));
  }, [jobPosts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_LANG, currentLang);
  }, [currentLang]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Trade count map
  const tradeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    artisans.forEach((art) => {
      // If a specific locality is active, count only matching artisans
      if (selectedLocality === 'All' || art.locality === selectedLocality) {
        counts[art.tradeId] = (counts[art.tradeId] || 0) + 1;
      }
    });
    return counts;
  }, [artisans, selectedLocality]);

  // Filtered Artisans
  const filteredArtisans = useMemo(() => {
    return artisans.filter((art) => {
      // 1. Trade filter
      if (selectedTrade !== 'all' && art.tradeId !== selectedTrade) {
        return false;
      }

      // 2. Locality filter
      if (selectedLocality !== 'All' && art.locality !== selectedLocality) {
        return false;
      }

      // 3. Available today filter
      if (filterAvailableNow && !art.emergencyAvailable) {
        return false;
      }

      // 4. Verified filter
      if (filterVerifiedOnly && !art.verified) {
        return false;
      }

      // 5. Rating filter
      if (filterTopRated && art.rating < 4.8) {
        return false;
      }

      // 6. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = art.name.toLowerCase().includes(q);
        const matchTradeHi = art.tradeTitleHi.toLowerCase().includes(q);
        const matchTradeEn = art.tradeTitleEn.toLowerCase().includes(q);
        const matchLoc = art.locality.toLowerCase().includes(q);
        const matchBio = art.bioHi.toLowerCase().includes(q);
        const matchSpec = art.specialties.some((s) => s.toLowerCase().includes(q));

        if (!matchName && !matchTradeHi && !matchTradeEn && !matchLoc && !matchBio && !matchSpec) {
          return false;
        }
      }

      return true;
    });
  }, [
    artisans,
    selectedTrade,
    selectedLocality,
    filterAvailableNow,
    filterVerifiedOnly,
    filterTopRated,
    searchQuery,
  ]);

  // Handlers for registering new artisan
  const handleRegisterArtisan = (newArtisan: Artisan) => {
    setArtisans((prev) => [newArtisan, ...prev]);
    showToast(
      currentLang === 'hi'
        ? `बधाई! '${newArtisan.name}' (${newArtisan.tradeTitleHi}) का पंजीकरण शाहजहांपुर सेवा पर लाइव हो गया है।`
        : `Success! '${newArtisan.name}' is now live on Shahjahanpur Karigar Hub.`
    );
    // Switch to artisans tab and clear filters to show user their card
    setActiveTab('artisans');
    setSelectedTrade('all');
    setSelectedLocality('All');
    setSearchQuery('');
  };

  // Handlers for posting new job
  const handlePostJob = (newJob: JobPost) => {
    setJobPosts((prev) => [newJob, ...prev]);
    showToast(
      currentLang === 'hi'
        ? `काम की आवश्यकता दर्ज हुई: '${newJob.title}'। कारीगर सीधे आपसे संपर्क करेंगे।`
        : `Work post created: '${newJob.title}'. Artisans will reach out directly.`
    );
    setActiveTab('jobs');
  };

  // Handlers for confirming booking
  const handleConfirmBooking = (req: BookingRequest) => {
    setBookings((prev) => [req, ...prev]);
    showToast(
      currentLang === 'hi'
        ? `बुकिंग अनुरोध '${req.artisanName}' को दर्ज कर लिया गया है।`
        : `Booking request sent to ${req.artisanName}.`
    );
  };

  // Handlers for adding review
  const handleAddReview = (artisanId: string, reviewData: Omit<Review, 'id' | 'date'>) => {
    setArtisans((prev) =>
      prev.map((art) => {
        if (art.id !== artisanId) return art;
        const newReview: Review = {
          ...reviewData,
          id: `rev-${Date.now()}`,
          date: 'अभी-अभी'
        };
        const updatedReviews = [newReview, ...art.reviews];
        const newRating = Number(
          (
            updatedReviews.reduce((sum, r) => sum + r.rating, 0) /
            updatedReviews.length
          ).toFixed(1)
        );
        return {
          ...art,
          reviews: updatedReviews,
          reviewsCount: updatedReviews.length,
          rating: newRating
        };
      })
    );
    showToast('आपका रिव्यू सफलतापूर्वक दर्ज किया गया!');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 max-w-md bg-stone-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-amber-500/50 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Top Bar Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenArtisanRegister={() => setIsArtisanRegisterOpen(true)}
        onOpenPostJob={() => setIsPostJobOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <HeroSection
          currentLang={currentLang}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLocality={selectedLocality}
          onLocalityChange={setSelectedLocality}
          selectedTrade={selectedTrade}
          onTradeChange={setSelectedTrade}
          onSearchSubmit={() => {
            setActiveTab('artisans');
            const targetEl = document.getElementById('artisans-section');
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          onQuickSelectTrade={(tradeId) => {
            setSelectedTrade(tradeId);
            setActiveTab('artisans');
            const targetEl = document.getElementById('artisans-section');
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* View Selection Tabs (Artisans vs Job Board vs How It Works) */}
        <div className="bg-stone-100 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 py-2.5">
              <button
                onClick={() => setActiveTab('artisans')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  activeTab === 'artisans'
                    ? 'bg-white text-stone-950 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Users className="w-4 h-4 text-amber-600" />
                <span>{t.tabFindArtisan}</span>
                <span className="font-mono text-xs text-stone-500 tabular-nums">
                  ({filteredArtisans.length})
                </span>
              </button>

              <button
                onClick={() => setActiveTab('jobs')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  activeTab === 'jobs'
                    ? 'bg-white text-stone-950 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Briefcase className="w-4 h-4 text-amber-600" />
                <span>{t.tabJobBoard}</span>
                <span className="font-mono text-xs text-stone-500 tabular-nums">
                  ({jobPosts.length})
                </span>
              </button>

              <button
                onClick={() => setActiveTab('how')}
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  activeTab === 'how'
                    ? 'bg-white text-stone-950 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{t.navHow}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Find Artisans View */}
        {activeTab === 'artisans' && (
          <div id="artisans-section">
            {/* Trade Categories Segmented Bar */}
            <TradeFilterBar
              currentLang={currentLang}
              selectedTrade={selectedTrade}
              onSelectTrade={setSelectedTrade}
              artisanCounts={tradeCounts}
            />

            {/* Locality & Status Filters */}
            <LocalityFilterBar
              currentLang={currentLang}
              selectedLocality={selectedLocality}
              onSelectLocality={setSelectedLocality}
              filterAvailableNow={filterAvailableNow}
              onToggleAvailableNow={() => setFilterAvailableNow(!filterAvailableNow)}
              filterVerifiedOnly={filterVerifiedOnly}
              onToggleVerifiedOnly={() => setFilterVerifiedOnly(!filterVerifiedOnly)}
              filterTopRated={filterTopRated}
              onToggleTopRated={() => setFilterTopRated(!filterTopRated)}
            />

            {/* Artisans Directory Grid Section */}
            <div className="py-8 bg-stone-50 min-h-[500px]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                
                {/* Result header line */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      {t.headingArtisans}
                    </h3>
                    {selectedLocality !== 'All' && (
                      <span className="text-xs text-stone-500 font-medium">
                        — {selectedLocality}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-stone-500 font-mono tabular-nums">
                    <span>
                      {filteredArtisans.length} {t.showingCount}
                    </span>
                    {(selectedTrade !== 'all' || selectedLocality !== 'All' || searchQuery || filterAvailableNow || filterVerifiedOnly || filterTopRated) && (
                      <button
                        onClick={() => {
                          setSelectedTrade('all');
                          setSelectedLocality('All');
                          setSearchQuery('');
                          setFilterAvailableNow(false);
                          setFilterVerifiedOnly(false);
                          setFilterTopRated(false);
                        }}
                        className="text-amber-700 hover:text-amber-800 underline cursor-pointer"
                      >
                        फिल्टर रीसेट करें
                      </button>
                    )}
                  </div>
                </div>

                {/* Cards Grid */}
                {filteredArtisans.length === 0 ? (
                  <div className="bg-white rounded-xl border border-stone-200 p-10 text-center space-y-3">
                    <Search className="w-10 h-10 text-stone-400 mx-auto stroke-1" />
                    <h4 className="text-base font-bold text-stone-900">
                      कोई कारीगर नहीं मिला
                    </h4>
                    <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                      {t.noArtisansFound}
                    </p>
                    <div className="pt-2 flex items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setSelectedTrade('all');
                          setSelectedLocality('All');
                          setSearchQuery('');
                        }}
                        className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-lg cursor-pointer"
                      >
                        सभी कारीगर देखें
                      </button>
                      <button
                        onClick={() => setIsArtisanRegisterOpen(true)}
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg cursor-pointer"
                      >
                        इस काम के लिए खुद रजिस्टर करें
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filteredArtisans.map((artisan) => (
                      <ArtisanCard
                        key={artisan.id}
                        artisan={artisan}
                        currentLang={currentLang}
                        onViewProfile={(art) => setSelectedArtisanForModal(art)}
                        onBookHire={(art) => setSelectedArtisanForBooking(art)}
                      />
                    ))}
                  </div>
                )}

              </div>
            </div>

            {/* How it works below directory for smooth discovery */}
            <HowItWorks
              currentLang={currentLang}
              onOpenArtisanRegister={() => setIsArtisanRegisterOpen(true)}
              onOpenPostJob={() => setIsPostJobOpen(true)}
            />
          </div>
        )}

        {/* Tab 2: Job Board View */}
        {activeTab === 'jobs' && (
          <JobBoardSection
            currentLang={currentLang}
            jobPosts={jobPosts}
            onOpenPostJob={() => setIsPostJobOpen(true)}
          />
        )}

        {/* Tab 3: How It Works View */}
        {activeTab === 'how' && (
          <HowItWorks
            currentLang={currentLang}
            onOpenArtisanRegister={() => setIsArtisanRegisterOpen(true)}
            onOpenPostJob={() => setIsPostJobOpen(true)}
          />
        )}

      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onSelectTrade={(tradeId) => {
          setSelectedTrade(tradeId);
          setActiveTab('artisans');
        }}
        onSelectLocality={(loc) => {
          setSelectedLocality(loc);
          setActiveTab('artisans');
        }}
        onOpenArtisanRegister={() => setIsArtisanRegisterOpen(true)}
        onOpenPostJob={() => setIsPostJobOpen(true)}
      />

      {/* Modals */}
      {/* 1. Artisan Detail Modal */}
      <ArtisanDetailModal
        artisan={selectedArtisanForModal}
        isOpen={Boolean(selectedArtisanForModal)}
        onClose={() => setSelectedArtisanForModal(null)}
        currentLang={currentLang}
        onAddReview={handleAddReview}
        onDirectBook={(art) => setSelectedArtisanForBooking(art)}
      />

      {/* 2. Register Artisan Modal */}
      <RegisterArtisanModal
        isOpen={isArtisanRegisterOpen}
        onClose={() => setIsArtisanRegisterOpen(false)}
        currentLang={currentLang}
        onRegisterSuccess={handleRegisterArtisan}
      />

      {/* 3. Post Job / Customer Requirement Modal */}
      <PostJobModal
        isOpen={isPostJobOpen}
        onClose={() => setIsPostJobOpen(false)}
        currentLang={currentLang}
        onPostSuccess={handlePostJob}
      />

      {/* 4. Direct Booking Request Modal */}
      <BookingModal
        artisan={selectedArtisanForBooking}
        isOpen={Boolean(selectedArtisanForBooking)}
        onClose={() => setSelectedArtisanForBooking(null)}
        currentLang={currentLang}
        onConfirmBooking={handleConfirmBooking}
      />

    </div>
  );
}
