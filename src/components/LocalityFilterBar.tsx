import React from 'react';
import { MapPin, CheckCircle, Clock, Star } from 'lucide-react';
import { SHAHJAHANPUR_LOCALITIES } from '../data/initialData';
import { ShahjahanpurLocality } from '../types';
import { Language } from '../data/translations';

interface LocalityFilterBarProps {
  currentLang: Language;
  selectedLocality: ShahjahanpurLocality;
  onSelectLocality: (loc: ShahjahanpurLocality) => void;
  filterAvailableNow: boolean;
  onToggleAvailableNow: () => void;
  filterVerifiedOnly: boolean;
  onToggleVerifiedOnly: () => void;
  filterTopRated: boolean;
  onToggleTopRated: () => void;
}

export const LocalityFilterBar: React.FC<LocalityFilterBarProps> = ({
  currentLang,
  selectedLocality,
  onSelectLocality,
  filterAvailableNow,
  onToggleAvailableNow,
  filterVerifiedOnly,
  onToggleVerifiedOnly,
  filterTopRated,
  onToggleTopRated,
}) => {
  return (
    <div className="py-3 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        
        {/* Top row: Area chips and Quick Status Toggles */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Locality Selector Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-stone-500 whitespace-nowrap shrink-0 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              {currentLang === 'hi' ? 'शाहजहांपुर इलाका:' : 'SPN Area:'}
            </span>

            {SHAHJAHANPUR_LOCALITIES.slice(0, 10).map((loc) => {
              const isSelected = selectedLocality === loc;
              const shortLabel = loc === 'All' 
                ? (currentLang === 'hi' ? 'सभी इलाके' : 'All Areas')
                : loc.split('(')[0].trim();

              return (
                <button
                  key={loc}
                  onClick={() => onSelectLocality(loc)}
                  className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-200'
                  }`}
                >
                  {shortLabel}
                </button>
              );
            })}

            {/* If a more distant area is selected, show it as active */}
            {SHAHJAHANPUR_LOCALITIES.slice(10).includes(selectedLocality) && (
              <button
                onClick={() => onSelectLocality(selectedLocality)}
                className="px-3 py-1.5 rounded-md text-xs whitespace-nowrap shrink-0 bg-stone-900 text-white border border-stone-900 font-semibold shadow-xs"
              >
                {selectedLocality.split('(')[0].trim()}
              </button>
            )}

            {/* Select dropdown for all remaining localities */}
            <select
              value={selectedLocality}
              onChange={(e) => onSelectLocality(e.target.value as ShahjahanpurLocality)}
              className="px-2.5 py-1.5 rounded-md text-xs bg-white text-stone-700 border border-stone-200 cursor-pointer focus:outline-none"
            >
              <option value="All">{currentLang === 'hi' ? 'अन्य सभी इलाके...' : 'More areas...'}</option>
              {SHAHJAHANPUR_LOCALITIES.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Filter Badges/Toggles */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onToggleAvailableNow}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                filterAvailableNow
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <Clock className={`w-3.5 h-3.5 ${filterAvailableNow ? 'text-emerald-600' : 'text-stone-400'}`} />
              <span>{currentLang === 'hi' ? 'आज उपलब्ध' : 'Available Today'}</span>
            </button>

            <button
              onClick={onToggleVerifiedOnly}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                filterVerifiedOnly
                  ? 'bg-blue-50 text-blue-800 border-blue-300 font-semibold'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <CheckCircle className={`w-3.5 h-3.5 ${filterVerifiedOnly ? 'text-blue-600' : 'text-stone-400'}`} />
              <span>{currentLang === 'hi' ? 'सत्यापित' : 'Verified'}</span>
            </button>

            <button
              onClick={onToggleTopRated}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                filterTopRated
                  ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${filterTopRated ? 'text-amber-500 fill-amber-500' : 'text-stone-400'}`} />
              <span>4.8+</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
