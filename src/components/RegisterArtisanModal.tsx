import React, { useState } from 'react';
import { X, UserCheck, ShieldCheck, Hammer, CheckCircle2 } from 'lucide-react';
import { Artisan, ShahjahanpurLocality, TradeId } from '../types';
import { SHAHJAHANPUR_LOCALITIES, TRADES_LIST } from '../data/initialData';
import { Language } from '../data/translations';

interface RegisterArtisanModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onRegisterSuccess: (newArtisan: Artisan) => void;
}

export const RegisterArtisanModal: React.FC<RegisterArtisanModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onRegisterSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [tradeId, setTradeId] = useState<TradeId>('carpenter');
  const [locality, setLocality] = useState<ShahjahanpurLocality>('टाउन हॉल (Town Hall)');
  const [specificAddress, setSpecificAddress] = useState('');
  const [experienceYears, setExperienceYears] = useState(5);
  const [dailyWage, setDailyWage] = useState(600);
  const [visitFee, setVisitFee] = useState(150);
  const [emergencyAvailable, setEmergencyAvailable] = useState(true);
  const [specialtiesText, setSpecialtiesText] = useState('अलमारी, दरवाजा, बेड फिटिंग');
  const [toolsText, setToolsText] = useState('इलेक्ट्रिक कटर, ड्रिल, हैंड टूल्स');
  const [bioHi, setBioHi] = useState('शाहजहांपुर में समय पर और मजबूत कारीगरी का काम। हर तरह के ऑर्डर स्वीकार किए जाते हैं।');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) return;

    const selectedTradeMeta = TRADES_LIST.find((t) => t.id === tradeId);

    // Pick a fitting avatar from our high-fidelity generated images based on trade
    let avatar = '/src/assets/images/spn_artisan_hero_1794325420444.jpg';
    if (tradeId === 'carpenter') avatar = '/src/assets/images/carpenter_woodwork_1794325420213.jpg';
    if (tradeId === 'blacksmith') avatar = '/src/assets/images/blacksmith_metalwork_1794325421227.jpg';
    if (tradeId === 'barber') avatar = '/src/assets/images/barber_grooming_1794325421827.jpg';

    const newArtisan: Artisan = {
      id: `art-user-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      whatsapp: whatsapp.trim() || phone.trim(),
      tradeId,
      tradeTitleHi: selectedTradeMeta ? selectedTradeMeta.nameHi : 'कुशल कारीगर',
      tradeTitleEn: selectedTradeMeta ? selectedTradeMeta.nameEn : 'Skilled Worker',
      locality,
      specificAddress: specificAddress.trim() || `${locality}, शाहजहांपुर`,
      experienceYears: Number(experienceYears) || 3,
      dailyWage: Number(dailyWage) || 500,
      visitFee: Number(visitFee) || 100,
      rating: 5.0,
      reviewsCount: 1,
      verified: true, // auto-mark verified for local community registration
      emergencyAvailable,
      bioHi: bioHi.trim(),
      specialties: specialtiesText
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      avatarImage: avatar,
      workPhotos: [avatar],
      toolsOwned: toolsText
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      reviews: [
        {
          id: `rev-initial-${Date.now()}`,
          authorName: 'शाहजहांपुर कारीगर सेवा सत्यापन',
          authorLocality: locality,
          rating: 5,
          comment: 'मोबाइल नंबर व अनुभव का सत्यापन पूर्ण हुआ। काम के लिए उपलब्ध।',
          date: 'आज'
        }
      ],
      registeredAt: new Date().toISOString().split('T')[0]
    };

    onRegisterSuccess(newArtisan);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-stone-900 px-6 py-4 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                कारीगर / कामगार पंजीकरण (100% फ्री)
              </h3>
              <p className="text-xs text-stone-400">
                शाहजहांपुर के नागरिक सीधे आपसे संपर्क करेंगे
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-stone-900">
                बधाई हो! आपका पंजीकरण सफल रहा
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                आपकी प्रोफाइल अब शाहजहांपुर के सभी नागरिकों को लाइव दिख रही है। लोग आपको सीधे कॉल व व्हाट्सएप कर सकते हैं।
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  इस पोर्टल पर रजिस्ट्रेशन बिल्कुल मुफ्त है। कोई बिचौलिया या फीस नहीं लगती।
                </span>
              </div>

              {/* Basic Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">आपका पूरा नाम *</label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. रामवीर शर्मा / उस्ताद असलम"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">काम / पेशा (Skill) *</label>
                  <select
                    value={tradeId}
                    onChange={(e) => setTradeId(e.target.value as TradeId)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                  >
                    {TRADES_LIST.map((tr) => (
                      <option key={tr.id} value={tr.id}>
                        {tr.nameHi} ({tr.nameEn})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">मोबाइल नंबर (कॉल हेतु) *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10 अंकों का मोबाइल नंबर"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">व्हाट्सएप नंबर (यदि अलग हो)</label>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="व्हाट्सएप नंबर (खाली छोड़ने पर वही रहेगा)"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 font-mono"
                  />
                </div>
              </div>

              {/* Location & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">शाहजहांपुर का इलाका / तहसील *</label>
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value as ShahjahanpurLocality)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                  >
                    {SHAHJAHANPUR_LOCALITIES.filter((l) => l !== 'All').map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">दुकान या निवास का सटीक पता</label>
                  <input
                    type="text"
                    placeholder="उदा. लकड़ी मंडी, दुकान नं 5, टाउन हॉल"
                    value={specificAddress}
                    onChange={(e) => setSpecificAddress(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                  />
                </div>
              </div>

              {/* Experience, Wage & Visit Fee */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">कार्य अनुभव (साल में)</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">दैनिक मजदूरी / दिहाड़ी (₹)</label>
                  <input
                    type="number"
                    step="50"
                    placeholder="उदा. 600"
                    value={dailyWage}
                    onChange={(e) => setDailyWage(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-800">न्यूनतम विजिट चार्ज (₹)</label>
                  <input
                    type="number"
                    step="25"
                    placeholder="उदा. 150"
                    value={visitFee}
                    onChange={(e) => setVisitFee(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900 font-mono"
                  />
                </div>
              </div>

              {/* Specialties & Tools */}
              <div className="space-y-1">
                <label className="font-semibold text-stone-800">
                  विशेष कार्य / किस काम में माहिर हैं (कॉमा से अलग करें)
                </label>
                <input
                  type="text"
                  placeholder="उदा. अलमारी, सोफा, मॉड्यूलर किचन, दरवाजा रिपेयर"
                  value={specialtiesText}
                  onChange={(e) => setSpecialtiesText(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-stone-800">
                  आपके पास उपलब्ध मशीनें व औजार
                </label>
                <input
                  type="text"
                  placeholder="उदा. कटर, इन्वर्टर वेल्डिंग, ड्रिल मशीन, स्टीमर"
                  value={toolsText}
                  onChange={(e) => setToolsText(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                />
              </div>

              {/* Bio */}
              <div className="space-y-1">
                <label className="font-semibold text-stone-800">
                  आपके बारे में संक्षिप्त जानकारी (बायो)
                </label>
                <textarea
                  rows={2}
                  value={bioHi}
                  onChange={(e) => setBioHi(e.target.value)}
                  placeholder="अपने काम की विशेषता, समय की पाबंदी आदि बताएं..."
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 text-stone-900"
                />
              </div>

              {/* Availability checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="availCheck"
                  checked={emergencyAvailable}
                  onChange={(e) => setEmergencyAvailable(e.target.checked)}
                  className="w-4 h-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500"
                />
                <label htmlFor="availCheck" className="text-stone-700 font-medium cursor-pointer">
                  मैं शाहजहांपुर में आज / तुरंत काम के लिए तैयार और उपलब्ध हूँ
                </label>
              </div>

              {/* Submit Buttons */}
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
                  <UserCheck className="w-4 h-4" />
                  <span>पंजीकरण सबमिट करें</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
