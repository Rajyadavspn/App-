import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, MessageSquare, Phone, User } from 'lucide-react';
import { Artisan, BookingRequest, ShahjahanpurLocality } from '../types';
import { SHAHJAHANPUR_LOCALITIES } from '../data/initialData';
import { Language } from '../data/translations';

interface BookingModalProps {
  artisan: Artisan | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onConfirmBooking: (req: BookingRequest) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  artisan,
  isOpen,
  onClose,
  currentLang,
  onConfirmBooking,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerLocality, setCustomerLocality] = useState<ShahjahanpurLocality>(
    artisan ? artisan.locality : 'टाउन हॉल (Town Hall)'
  );
  const [workDetails, setWorkDetails] = useState('');
  const [preferredDate, setPreferredDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !artisan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) return;

    const newReq: BookingRequest = {
      id: `book-${Date.now()}`,
      artisanId: artisan.id,
      artisanName: artisan.name,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerLocality,
      workDetails: workDetails.trim(),
      preferredDate,
      createdAt: new Date().toISOString(),
    };

    onConfirmBooking(newReq);
    setIsBooked(true);
  };

  const waBookingMessage = encodeURIComponent(
    `नमस्ते ${artisan.name} जी! मेरा नाम ${customerName} है (${customerLocality}, शाहजहांपुर)। मैंने 'शाहजहांपुर कारीगर सेवा' पर आपके काम के लिए रिक्वेस्ट भेजी है: "${workDetails}"। कृपया फोन या मैसेज पर समय बताएं। फोन: ${customerPhone}`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-stone-900 px-6 py-4 text-white flex items-center justify-between border-b border-stone-800">
          <div>
            <h3 className="text-base font-bold text-white">
              काम का न्योता / बुकिंग अनुरोध
            </h3>
            <p className="text-xs text-amber-400">
              कारीगर: {artisan.name} ({artisan.tradeTitleHi})
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {isBooked ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-stone-900">
                न्योता सफलतापूर्वक भेज दिया गया!
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                आपका संपर्क विवरण <strong>{artisan.name}</strong> को दर्ज हो गया है। आप तुरंत व्हाट्सएप पर भी संदेश भेज सकते हैं:
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                <a
                  href={`https://wa.me/91${artisan.whatsapp}?text=${waBookingMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>व्हाट्सएप पर सूचित करें</span>
                </a>

                <a
                  href={`tel:${artisan.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>सीधा कॉल करें</span>
                </a>
              </div>

              <div className="pt-3 border-t border-stone-200">
                <button
                  onClick={onClose}
                  className="text-xs text-stone-600 hover:text-stone-900 font-medium cursor-pointer"
                >
                  विंडो बंद करें
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              
              <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-stone-700 flex items-center justify-between text-xs">
                <span>दैनिक दिहाड़ी: <strong>₹{artisan.dailyWage || 500}/दिन</strong></span>
                <span>विजिट चार्ज: <strong>₹{artisan.visitFee || 100}</strong></span>
              </div>

              {/* Customer Name & Phone */}
              <div className="space-y-1">
                <label className="font-semibold text-stone-800">आपका नाम *</label>
                <input
                  type="text"
                  required
                  placeholder="उदा. आलोक गुप्ता"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">आपका फोन नंबर *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10 अंकों का मोबाइल"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">पसंदीदा तारीख</label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                  />
                </div>
              </div>

              {/* Customer Locality */}
              <div className="space-y-1">
                <label className="font-semibold text-stone-800">काम का इलाका (शाहजहांपुर) *</label>
                <select
                  value={customerLocality}
                  onChange={(e) => setCustomerLocality(e.target.value as ShahjahanpurLocality)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                >
                  {SHAHJAHANPUR_LOCALITIES.filter((l) => l !== 'All').map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Work Details */}
              <div className="space-y-1">
                <label className="font-semibold text-stone-800">काम का संक्षिप्त विवरण *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="उदा. अलमारी का कब्जा टूटा है, दरवाजा रिपेयर करना है..."
                  value={workDetails}
                  onChange={(e) => setWorkDetails(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                />
              </div>

              {/* Buttons */}
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
                  <Calendar className="w-4 h-4" />
                  <span>न्योता भेजें</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
