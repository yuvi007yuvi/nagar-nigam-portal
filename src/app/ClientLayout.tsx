'use client';

import { useState, ReactNode } from 'react';
import { LanguageProvider } from '@/lib/LanguageContext';
import TopStrip from '@/components/layout/TopStrip';
import MainHeader from '@/components/layout/MainHeader';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import GovernmentInitiatives from '@/components/layout/GovernmentInitiatives';
import FloatingWidgets from '@/components/common/FloatingWidgets';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <LanguageProvider>
      {/* Skip to Content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>


      {/* Top Government Strip */}
      <TopStrip />

      {/* Main Header */}
      <MainHeader onMobileMenuToggle={() => setMobileMenuOpen(true)} />

      {/* Navigation */}
      <Navigation
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <main id="main-content">
        {children}
      </main>

      {/* Government Initiatives */}
      <GovernmentInitiatives />

      {/* Footer */}
      <Footer />

      {/* Floating Widgets */}
      <FloatingWidgets />
    </LanguageProvider>
  );
}
