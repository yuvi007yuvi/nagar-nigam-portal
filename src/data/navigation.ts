import { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  {
    labelEn: 'Home',
    labelHi: 'होम',
    href: '/',
  },
  {
    labelEn: 'Citizen Services',
    labelHi: 'नागरिक सेवाएं',
    href: '/services',
    children: [
      { labelEn: 'Property Tax', labelHi: 'संपत्ति कर', href: '/services/property-tax' },
      { labelEn: 'Water Tax', labelHi: 'जल कर', href: '/services/water-tax' },
      { labelEn: 'Birth Certificate', labelHi: 'जन्म प्रमाण पत्र', href: '/services/certificates/birth' },
      { labelEn: 'Death Certificate', labelHi: 'मृत्यु प्रमाण पत्र', href: '/services/certificates/death' },
      { labelEn: 'Trade License', labelHi: 'व्यापार लाइसेंस', href: '/services/trade-license' },
      { labelEn: 'Building Permission', labelHi: 'भवन निर्माण अनुमति', href: '/services/building-permission' },
      { labelEn: 'Register Complaint', labelHi: 'शिकायत दर्ज करें', href: '/services/complaints' },
      { labelEn: 'Track Complaint', labelHi: 'शिकायत ट्रैक करें', href: '/services/complaints/track' },
    ],
  },
  {
    labelEn: 'Departments',
    labelHi: 'विभाग',
    href: '/departments',
    children: [
      { labelEn: 'Health', labelHi: 'स्वास्थ्य', href: '/departments/health' },
      { labelEn: 'Engineering', labelHi: 'अभियांत्रिकी', href: '/departments/engineering' },
      { labelEn: 'Revenue', labelHi: 'राजस्व', href: '/departments/revenue' },
      { labelEn: 'Water Supply', labelHi: 'जल आपूर्ति', href: '/departments/water-supply' },
      { labelEn: 'Sanitation', labelHi: 'स्वच्छता', href: '/departments/sanitation' },
      { labelEn: 'Electrical', labelHi: 'विद्युत', href: '/departments/electrical' },
      { labelEn: 'Town Planning', labelHi: 'नगर नियोजन', href: '/departments/town-planning' },
    ],
  },
  {
    labelEn: 'Tenders',
    labelHi: 'निविदाएं',
    href: '/tenders',
  },
  {
    labelEn: 'RTI',
    labelHi: 'आरटीआई',
    href: '/downloads?category=rti',
  },
  {
    labelEn: 'Schemes',
    labelHi: 'योजनाएं',
    href: '/projects',
  },
  {
    labelEn: 'Gallery',
    labelHi: 'गैलरी',
    href: '/gallery',
  },
  {
    labelEn: 'Downloads',
    labelHi: 'डाउनलोड',
    href: '/downloads',
  },
  {
    labelEn: 'Contact',
    labelHi: 'संपर्क',
    href: '/contact',
  },
];
