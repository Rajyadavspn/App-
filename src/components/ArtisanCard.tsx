import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { Artisan } from '../types';
import { Language } from '../data/translations';

interface ArtisanCardProps {
  artisan: Artisan;
  currentLang: Language;
  onViewProfile: (artisan: Artisan) => void;
  onBookHire: (artisan: Artisan) => void;
}

export const ArtisanCard: React.FC<ArtisanCardProps> = ({
  artisan,
  currentLang,
  onViewProfile,
  onBookHire,
}) => {
  const [imgError, setImgError] = useState(false);

  // WhatsApp prefilled message
  const waText = encodeURIComponent(
    `नमस्ते ${artisan.name} जी, मैंने आपकी प्रोफाइल 'शाहजहांपुर कारीगर सेवा' पर देखी है। मुझे ${artisan.tradeTitleHi} के काम के लिए आपसे बात करनी है। क्या आप उपलब्ध हैं?`
  );

  return (
    <div className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-stone-400 transition-all flex flex-col justify-between">
      
      {/* Top Media & Header Block */}
      <div>
        <div className="relative h-44 bg-stone-100 overflow-hidden">
          {!imgError ? (
            <img
              src={artisan.avatarImage}
              alt={artisan.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-600">
              <Briefcase className="w-12 h-12 stroke-[1.5]" />
            </div>
          )}

          {/* Quick status overlays */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            {artisan.verified && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-900/85 backdrop-blur-sm text-amber-300 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>सत्यापित</span>
              </span>
            )}
            {artisan.emergencyAvailable && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-900/85 backdrop-blur-sm text-emerald-300 text-[11px] font-medium">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>आज उपलब्ध</span>
              </span>
            )}
          </div>

          {/* Rating in top-right */}
          <div className="absolute top-3 right-3 bg-stone-950/85 backdrop-blur-sm text-white px-2 py-1 rounded flex items-center gap-1 text-xs font-mono tabular-nums">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="font-bold">{artisan.rating.toFixed(1)}</span>
            <span className="text-[10px] text-stone-400">({artisan.reviewsCount})</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 space-y-3">
          
          {/* Artisan Name & Trade */}
          <div>
            <h3 className="text-base font-bold text-stone-900 hover:text-amber-700 cursor-pointer transition-colors" onClick={() => onViewProfile(artisan)}>
              {artisan.name}
            </h3>
            
            {/* Unboxed Metadata with · separator as mandated by frontend design */}
            <div className="flex items-center gap-1.5 text-xs text-stone-600 mt-1">
              <span className="font-semibold text-amber-700">{artisan.tradeTitleHi}</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="font-mono tabular-nums">{artisan.experienceYears} वर्ष अनुभव</span>
            </div>
          </div>

          {/* Locality in Shahjahanpur */}
          <div className="flex items-start gap-1.5 text-xs text-stone-600">
            <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
            <span className="line-clamp-1">{artisan.locality}</span>
          </div>

          {/* Short Bio */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {artisan.bioHi}
          </p>

          {/* Specialties / Service highlights (unboxed inline list) */}
          <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-stone-500">
            <span className="font-medium text-stone-700">काम:</span>
            {artisan.specialties.slice(0, 3).map((spec, i) => (
              <React.Fragment key={spec}>
                <span>{spec}</span>
                {i < 2 && i < artisan.specialties.length - 1 && (
                  <span aria-hidden="true" className="text-stone-300">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Pricing strip in tabular figures */}
          <div className="pt-2 flex items-center justify-between text-xs font-mono tabular-nums bg-stone-50 p-2.5 rounded-lg border border-stone-100">
            <div>
              <span className="text-[10px] text-stone-500 block">अनुमानित दिहाड़ी</span>
              <span className="font-bold text-stone-900">
                {artisan.dailyWage ? `₹${artisan.dailyWage}/दिन` : 'काम अनुसार'}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-stone-500 block">विजिट चार्ज</span>
              <span className="font-semibold text-stone-700">
                {artisan.visitFee ? `₹${artisan.visitFee}` : 'निःशुल्क सलाह'}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-4 sm:p-5 pt-0 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${artisan.phone}`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>कॉल करें</span>
          </a>

          {/* Direct WhatsApp Chat */}
          <a
            href={`https://wa.me/91${artisan.whatsapp}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>व्हाट्सएप</span>
          </a>
        </div>

        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => onBookHire(artisan)}
            className="text-xs font-medium text-amber-700 hover:text-amber-800 underline underline-offset-2 cursor-pointer"
          >
            काम का न्योता भेजें
          </button>

          <button
            onClick={() => onViewProfile(artisan)}
            className="text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
          >
            <span>विवरण देखें</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

    </div>
  );
};
