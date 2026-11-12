import React from 'react';
import { 
  Hammer, 
  Flame, 
  Scissors, 
  Wrench, 
  Zap, 
  Building, 
  Paintbrush, 
  Cpu, 
  Shirt, 
  Car, 
  Flower2, 
  Users, 
  Layers 
} from 'lucide-react';
import { TRADES_LIST } from '../data/initialData';
import { TradeId } from '../types';
import { Language } from '../data/translations';

interface TradeFilterBarProps {
  currentLang: Language;
  selectedTrade: TradeId | 'all';
  onSelectTrade: (trade: TradeId | 'all') => void;
  artisanCounts: Record<string, number>;
}

export const TradeFilterBar: React.FC<TradeFilterBarProps> = ({
  currentLang,
  selectedTrade,
  onSelectTrade,
  artisanCounts,
}) => {
  const getIcon = (tradeId: string) => {
    switch (tradeId) {
      case 'carpenter':
        return <Hammer className="w-4 h-4 shrink-0" />;
      case 'blacksmith':
        return <Flame className="w-4 h-4 shrink-0" />;
      case 'barber':
        return <Scissors className="w-4 h-4 shrink-0" />;
      case 'plumber':
        return <Wrench className="w-4 h-4 shrink-0" />;
      case 'electrician':
        return <Zap className="w-4 h-4 shrink-0" />;
      case 'mason':
        return <Building className="w-4 h-4 shrink-0" />;
      case 'painter':
        return <Paintbrush className="w-4 h-4 shrink-0" />;
      case 'mechanic':
        return <Cpu className="w-4 h-4 shrink-0" />;
      case 'tailor':
        return <Shirt className="w-4 h-4 shrink-0" />;
      case 'driver':
        return <Car className="w-4 h-4 shrink-0" />;
      case 'gardener':
        return <Flower2 className="w-4 h-4 shrink-0" />;
      case 'labor':
        return <Users className="w-4 h-4 shrink-0" />;
      default:
        return <Layers className="w-4 h-4 shrink-0" />;
    }
  };

  const totalCount = Object.values(artisanCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="py-4 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
            {currentLang === 'hi' ? 'काम / पेशा अनुसार चुनें' : 'Filter by Trade / Skill'}
          </h2>
          <span className="text-xs text-stone-500 font-mono tabular-nums">
            {currentLang === 'hi' ? `कुल कारीगर: ${totalCount}` : `Total Artisans: ${totalCount}`}
          </span>
        </div>

        {/* Horizontal scrollable trade buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => onSelectTrade('all')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer border ${
              selectedTrade === 'all'
                ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border-stone-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{currentLang === 'hi' ? 'सभी काम' : 'All Trades'}</span>
            <span className="font-mono text-[11px] opacity-75 tabular-nums">({totalCount})</span>
          </button>

          {TRADES_LIST.map((tr) => {
            const isSelected = selectedTrade === tr.id;
            const count = artisanCounts[tr.id] || 0;

            return (
              <button
                key={tr.id}
                onClick={() => onSelectTrade(tr.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-600 font-semibold shadow-sm'
                    : 'bg-stone-100 text-stone-800 hover:bg-stone-200 border-stone-200'
                }`}
              >
                {getIcon(tr.id)}
                <span>{currentLang === 'hi' ? tr.nameHi : tr.nameEn}</span>
                {count > 0 && (
                  <span className={`font-mono text-[11px] tabular-nums ${isSelected ? 'text-amber-100' : 'text-stone-500'}`}>
                    ({count})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
