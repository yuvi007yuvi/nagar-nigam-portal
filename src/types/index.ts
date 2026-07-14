/* ========================================================================
   TypeScript Type Definitions — Nagar Nigam Mathura-Vrindavan Portal
   ======================================================================== */

// ── Service Types ──
export interface Service {
  id: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  icon: string;
  href: string;
  category: 'tax' | 'certificate' | 'complaint' | 'license' | 'utility' | 'general';
  isOnline: boolean;
}

// ── Department Types ──
export interface Department {
  id: string;
  slug: string;
  nameEn: string;
  nameHi: string;
  descriptionEn: string;
  descriptionHi: string;
  icon: string;
  officerName: string;
  officerDesignation: string;
  phone: string;
  email: string;
  quickLinks: { labelEn: string; labelHi: string; href: string }[];
}

// ── News Types ──
export interface NewsItem {
  id: string;
  slug: string;
  titleEn: string;
  titleHi: string;
  excerptEn: string;
  excerptHi: string;
  contentEn: string;
  contentHi: string;
  category: 'general' | 'development' | 'health' | 'education' | 'event' | 'announcement';
  date: string;
  image: string;
  author: string;
}

// ── Notice Types ──
export interface Notice {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'circular' | 'recruitment' | 'tender' | 'rti' | 'press' | 'emergency';
  date: string;
  pdfUrl?: string;
  isNew: boolean;
}

// ── Statistics Types ──
export interface Statistic {
  id: string;
  labelEn: string;
  labelHi: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: string;
  color: string;
}

// ── Tender Types ──
export interface Tender {
  id: string;
  titleEn: string;
  titleHi: string;
  department: string;
  referenceNumber: string;
  publishDate: string;
  lastDate: string;
  estimatedCost: string;
  status: 'open' | 'closed' | 'upcoming';
  pdfUrl: string;
}

// ── FAQ Types ──
export interface FAQ {
  id: string;
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
  category: 'tax' | 'certificate' | 'complaint' | 'general' | 'license' | 'water';
}

// ── Project Types ──
export interface Project {
  id: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  progress: number;
  budget: string;
  startDate: string;
  endDate?: string;
  image: string;
}

// ── Officer / Profile Types ──
export interface OfficialProfile {
  name: string;
  nameHi: string;
  designation: string;
  designationHi: string;
  messageEn: string;
  messageHi: string;
  photo: string;
  email?: string;
  phone?: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

// ── Ward Types ──
export interface Ward {
  id: number;
  nameEn: string;
  nameHi: string;
  zone: string;
  corporator: string;
  population: number;
}

// ── Complaint Types ──
export interface Complaint {
  id: string;
  complaintNumber: string;
  subject: string;
  description: string;
  department: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  date: string;
  resolvedDate?: string;
  images?: string[];
  location?: { lat: number; lng: number };
}

// ── Download Types ──
export interface DownloadItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'acts' | 'rules' | 'circulars' | 'forms' | 'reports' | 'budget';
  fileSize: string;
  fileType: 'pdf' | 'doc' | 'xls';
  date: string;
  url: string;
}

// ── Gallery Types ──
export interface GalleryItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'photos' | 'videos' | 'drone' | 'events' | 'projects';
  image: string;
  date: string;
  type: 'image' | 'video';
}

// ── Navigation Types ──
export interface NavItem {
  labelEn: string;
  labelHi: string;
  href: string;
  children?: NavItem[];
  icon?: string;
}

// ── Language Type ──
export type Language = 'en' | 'hi';
