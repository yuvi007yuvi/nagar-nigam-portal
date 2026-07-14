'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './MainHeader.module.css';

interface MainHeaderProps {
  onMobileMenuToggle?: () => void;
}

export default function MainHeader({ onMobileMenuToggle }: MainHeaderProps) {
  const { t } = useLanguage();

  return (
    <header className={styles.mainHeader}>
      <div className={styles.headerInner}>
        {/* Left Logos */}
        <div className={styles.leftLogos}>
          <img 
            src="/images/logos/ashoka.svg" 
            alt="State Emblem of India" 
            className={styles.brandingLogo}
          />
          <img 
            src="/images/logos/up-gov.svg" 
            alt="Government of Uttar Pradesh" 
            className={styles.brandingLogo}
          />
        </div>

        {/* Center Logo & Org Name */}
        <Link href="/" className={styles.centerSection}>
          <div className={styles.logoImageWrapper}>
            <Image 
              src="/images/MathuraLogo.png" 
              alt="Nagar Nigam Mathura-Vrindavan Logo" 
              width={90} 
              height={90}
              priority
            />
          </div>
          <div className={styles.orgInfo}>
            <span className={styles.orgNameHi}>नगर निगम मथुरा-वृन्दावन</span>
          </div>
        </Link>

        {/* Right Logos */}
        <div className={styles.rightLogos}>
          <img 
            src="/images/logos/digital-india.svg" 
            alt="Digital India" 
            className={styles.brandingLogo}
          />
          <img 
            src="/images/logos/swachh-bharat.svg" 
            alt="Swachh Bharat Mission" 
            className={styles.brandingLogo}
          />
          <img 
            src="/images/logos/mygov.svg" 
            alt="MyGov India" 
            className={styles.brandingLogo}
          />
          <img 
            src="/images/logos/amrut.svg" 
            alt="AMRUT Mission" 
            className={styles.brandingLogo}
          />
          <img 
            src="/images/logos/smart-city.svg" 
            alt="Smart Cities Mission" 
            className={styles.brandingLogo}
          />
        </div>

        {/* Mobile Menu Button - visible only on mobile */}
        <button
          className={styles.mobileMenuBtn}
          onClick={onMobileMenuToggle}
          aria-label={t('Open menu', 'मेनू खोलें')}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
