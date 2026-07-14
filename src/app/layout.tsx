import type { Metadata } from 'next';
import './globals.css';
import './shared.module.css';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'नगर निगम मथुरा-वृन्दावन | Mathura Vrindavan Municipal Corporation',
  description:
    'Official portal of Nagar Nigam Mathura-Vrindavan (Mathura Vrindavan Municipal Corporation), Government of Uttar Pradesh. Access citizen services, pay property tax, water tax, register complaints, apply for certificates and more.',
  keywords: [
    'Nagar Nigam Mathura',
    'Mathura Vrindavan Municipal Corporation',
    'नगर निगम मथुरा-वृन्दावन',
    'Property Tax Mathura',
    'Water Tax',
    'Birth Certificate',
    'Death Certificate',
    'Complaint',
    'Smart City',
  ],
  authors: [{ name: 'Nagar Nigam Mathura-Vrindavan' }],
  robots: 'index, follow',
  openGraph: {
    title: 'नगर निगम मथुरा-वृन्दावन | Smart Municipal Corporation Portal',
    description: 'Official Smart City Portal — All municipal services at one place.',
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'hi_IN',
    siteName: 'Nagar Nigam Mathura-Vrindavan',
  },
  icons: {
    icon: '/images/MathuraLogo.png',
    apple: '/images/MathuraLogo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B5CAB" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
