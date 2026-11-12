export type TradeId =
  | 'carpenter'
  | 'blacksmith'
  | 'barber'
  | 'plumber'
  | 'electrician'
  | 'mason'
  | 'painter'
  | 'mechanic'
  | 'tailor'
  | 'welder'
  | 'driver'
  | 'gardener'
  | 'labor';

export type ShahjahanpurLocality =
  | 'All'
  | 'टाउन हॉल (Town Hall)'
  | 'सदर बाजार (Sadar Bazar)'
  | 'बहादुरगंज (Bahadurganj)'
  | 'रोजा (Roza)'
  | 'शाहजहांपुर कैंट (Cantt)'
  | 'पुवायां (Powayan)'
  | 'तिलहर (Tilhar)'
  | 'जलालाबाद (Jalalabad)'
  | 'निगोही (Nigohi)'
  | 'कलान (Kalan)'
  | 'बंडा (Banda)'
  | 'खुटार (Khutar)'
  | 'चौक / घंटाघर (Chowk)'
  | 'आवास विकास (Awas Vikas)'
  | 'लोधीपुर (Lodhipur)'
  | 'आर.सी. मिशन (RC Mission)'
  | 'अजीजगंज (Azizganj)'
  | 'बरेली मोड़ (Bareilly Morh)';

export interface TradeMeta {
  id: TradeId;
  nameHi: string;
  nameEn: string;
  iconName: string;
  descriptionHi: string;
  descriptionEn: string;
  commonServicesHi: string[];
}

export interface Review {
  id: string;
  authorName: string;
  authorLocality: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Artisan {
  id: string;
  name: string;
  phone: string;
  whatsapp: string;
  tradeId: TradeId;
  tradeTitleHi: string;
  tradeTitleEn: string;
  locality: ShahjahanpurLocality;
  specificAddress: string;
  experienceYears: number;
  dailyWage?: number; // per day rate in INR
  visitFee?: number; // minimum visit charge in INR
  rating: number;
  reviewsCount: number;
  verified: boolean;
  emergencyAvailable: boolean;
  bioHi: string;
  specialties: string[];
  avatarImage: string;
  workPhotos: string[];
  toolsOwned: string[];
  reviews: Review[];
  registeredAt: string;
}

export interface JobPost {
  id: string;
  customerName: string;
  customerPhone: string;
  customerWhatsapp?: string;
  tradeNeeded: TradeId;
  tradeTitleHi: string;
  title: string;
  description: string;
  locality: ShahjahanpurLocality;
  budgetInr: number;
  urgency: 'urgent_today' | 'this_week' | 'flexible';
  postedAt: string;
  status: 'open' | 'in_progress' | 'completed';
}

export interface BookingRequest {
  id: string;
  artisanId: string;
  artisanName: string;
  customerName: string;
  customerPhone: string;
  customerLocality: ShahjahanpurLocality;
  workDetails: string;
  preferredDate: string;
  createdAt: string;
}
