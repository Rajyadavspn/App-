import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Calendar,
  Send,
  Wrench,
  Award,
  User
} from 'lucide-react';
import { Artisan, Review } from '../types';
import { Language } from '../data/translations';

interface ArtisanDetailModalProps {
  artisan: Artisan | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onAddReview: (artisanId: string, review: Omit<Review, 'id' | 'date'>) => void;
  onDirectBook: (artisan: Artisan) => void;
}

export const ArtisanDetailModal: React.FC<ArtisanDetailModalProps> = ({
  artisan,
  isOpen,
  onClose,
  currentLang,
  onAddReview,
  onDirectBook,
}) => {
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewLocality, setNewReviewLocality] = useState('टाउन हॉल (Town Hall)');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  if (!isOpen || !artisan) return null;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    onAddReview(artisan.id, {
      authorName: newReviewAuthor.trim(),
      authorLocality: newReviewLocality,
      rating: newReviewRating,
      comment: newReviewComment.trim(),
    });

    setReviewSubmitted(true);
    setNewReviewAuthor('');
    setNewReviewComment('');
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  const waText = encodeURIComponent(
    `नमस्ते ${artisan.name} जी, मैंने आपकी प्रोफाइल 'शाहजहांपुर कारीगर सेवा' पर देखी है। मुझे ${artisan.tradeTitleHi} के काम के लिए आपसे बात करनी है।`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-950 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Banner with Artisan Image & Key Badges */}
        <div className="relative h-48 sm:h-64 bg-stone-900">
          <img
            src={artisan.avatarImage}
            alt={artisan.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          
          <div className="absolute bottom-4 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-amber-400">{artisan.tradeTitleHi}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{artisan.experienceYears} वर्ष का अनुभव</span>
              {artisan.verified && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" /> शाहजहांपुर सत्यापित
                  </span>
                </>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {artisan.name}
            </h2>

            <div className="flex items-center gap-2 text-xs text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{artisan.locality}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Action Row: Direct Call, WhatsApp & Booking */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="text-xs text-stone-500 font-medium">सीधा मोबाइल नंबर:</span>
              <p className="text-base font-bold text-stone-900 font-mono tabular-nums">
                +91 {artisan.phone}
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`tel:${artisan.phone}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>फोन लगाएं</span>
              </a>

              <a
                href={`https://wa.me/91${artisan.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>व्हाट्सएप</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onDirectBook(artisan);
                }}
                className="inline-flex items-center justify-center gap-1 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>काम बुक करें</span>
              </button>
            </div>
          </div>

          {/* Pricing & Availability Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono tabular-nums">
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <span className="text-stone-500 block text-[11px]">दैनिक मजदूरी</span>
              <span className="text-base font-bold text-stone-900">
                {artisan.dailyWage ? `₹${artisan.dailyWage}/दिन` : 'काम अनुसार'}
              </span>
            </div>

            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <span className="text-stone-500 block text-[11px]">विजिट / चेकअप फीस</span>
              <span className="text-base font-bold text-stone-900">
                {artisan.visitFee ? `₹${artisan.visitFee}` : 'मुफ़्त'}
              </span>
            </div>

            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <span className="text-stone-500 block text-[11px]">ग्राहक रेटिंग</span>
              <span className="text-base font-bold text-amber-700 flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                {artisan.rating.toFixed(1)} ({artisan.reviewsCount})
              </span>
            </div>

            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <span className="text-stone-500 block text-[11px]">काम का समय</span>
              <span className="text-sm font-semibold text-stone-900 font-sans">
                {artisan.emergencyAvailable ? 'आज तुरंत उपलब्ध' : 'समय पूर्व सूचित'}
              </span>
            </div>
          </div>

          {/* Detailed Bio & Workshop Address */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-stone-900">कारीगर का परिचय ও अनुभव</h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {artisan.bioHi}
            </p>
            <div className="flex items-start gap-2 text-xs text-stone-600 pt-1">
              <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span><strong>दुकान / कार्यस्थल का पता:</strong> {artisan.specificAddress}</span>
            </div>
          </div>

          {/* Specialties / Service List */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-stone-900">विशेष कार्य व महारत (Specialties)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {artisan.specialties.map((spec) => (
                <div key={spec} className="flex items-center gap-2 p-2 bg-stone-50 rounded border border-stone-100 text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Owned */}
          {artisan.toolsOwned && artisan.toolsOwned.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-stone-600" />
                <span>उपलब्ध आधुनिक औजार व मशीनरी</span>
              </h4>
              <div className="flex flex-wrap gap-1.5 text-xs text-stone-600">
                {artisan.toolsOwned.map((t, i) => (
                  <span key={t} className="px-2.5 py-1 bg-stone-100 rounded text-stone-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Past Work Photos */}
          {artisan.workPhotos && artisan.workPhotos.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-stone-900">पिछले किए गए काम के नमूने (फोटो)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {artisan.workPhotos.map((photo, idx) => (
                  <div key={idx} className="h-32 rounded-lg overflow-hidden border border-stone-200">
                    <img
                      src={photo}
                      alt={`काम का नमूना ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Customer Reviews Section */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span>शाहजहांपुर निवासियों के रिव्यू व अनुभव</span>
                <span className="text-xs text-stone-500 font-mono tabular-nums">({artisan.reviews.length})</span>
              </h4>
            </div>

            {/* Existing Reviews List */}
            <div className="space-y-3">
              {artisan.reviews.map((rev) => (
                <div key={rev.id} className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-stone-400" />
                      <span className="font-semibold text-stone-900">{rev.authorName}</span>
                      <span className="text-stone-400">·</span>
                      <span className="text-stone-500">{rev.authorLocality}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-600 font-bold font-mono">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{rev.rating}.0</span>
                      <span className="text-stone-400 font-normal">({rev.date})</span>
                    </div>
                  </div>
                  <p className="text-stone-700 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>

            {/* Add Review Form */}
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
              <h5 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                अपना अनुभव व रिव्यू साझा करें
              </h5>

              {reviewSubmitted ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg font-medium">
                  धन्यवाद! आपका रिव्यू सफलतापूर्वक जोड़ दिया गया है।
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <input
                      type="text"
                      placeholder="आपका नाम (उदा. सुधीर गुप्ता)"
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      required
                      className="px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-amber-500"
                    />

                    <select
                      value={newReviewLocality}
                      onChange={(e) => setNewReviewLocality(e.target.value)}
                      className="px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-amber-500"
                    >
                      <option value="टाउन हॉल (Town Hall)">टाउन हॉल</option>
                      <option value="सदर बाजार (Sadar Bazar)">सदर बाजार</option>
                      <option value="रोजा (Roza)">रोजा</option>
                      <option value="पुवायां (Powayan)">पुवायां</option>
                      <option value="तिलहर (Tilhar)">तिलहर</option>
                      <option value="जलालाबाद (Jalalabad)">जलालाबाद</option>
                      <option value="आवास विकास (Awas Vikas)">आवास विकास</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-stone-600 font-medium">रेटिंग:</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewReviewRating(star)}
                          className="p-1 cursor-pointer"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              star <= newReviewRating
                                ? 'text-amber-500 fill-amber-500'
                                : 'text-stone-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    rows={2}
                    placeholder="कारीगर के काम, व्यवहार और समय की पाबंदी के बारे में लिखें..."
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:border-amber-500"
                  />

                  <button
                    type="submit"
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>रिव्यू सबमिट करें</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
