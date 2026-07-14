'use client';

import { useLanguage } from '@/lib/LanguageContext';
import styles from './TopStrip.module.css';

export default function TopStrip() {
  const { language, toggleLanguage, t } = useLanguage();

  const handleFontSize = (size: string) => {
    document.documentElement.className = document.documentElement.className
      .replace(/font-size-\w+/g, '')
      .trim();
    document.documentElement.classList.add(`font-size-${size}`);
  };

  const toggleContrast = () => {
    document.documentElement.classList.toggle('high-contrast');
  };

  const today = new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles.topStrip} role="banner">
      <div className={styles.topStripInner}>
        <div className={styles.govLogos}>
          <a
            href="https://india.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.govLink}
            aria-label={t('Government of India', 'भारत सरकार')}
          >
            🇮🇳 {t('Government of India', 'भारत सरकार')}
          </a>
          <span className={styles.divider} aria-hidden="true" />
          <a
            href="https://up.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.govLink}
            aria-label={t('Government of Uttar Pradesh', 'उत्तर प्रदेश सरकार')}
          >
            {t('Government of UP', 'उ.प्र. सरकार')}
          </a>
          <span className={styles.divider} aria-hidden="true" />
          <a
            href="https://digitalindia.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.govLink}
          >
            {t('Digital India', 'डिजिटल इंडिया')}
          </a>
          <span className={styles.divider} aria-hidden="true" />
          <a
            href="https://swachhbharatmission.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.govLink}
          >
            {t('Swachh Bharat', 'स्वच्छ भारत')}
          </a>
        </div>

        <div className={styles.stripRight}>
          <div className={styles.dateWeather}>
            <span>📅 {today}</span>
            <span className={styles.divider} aria-hidden="true" />
            <span>🌤️ 34°C</span>
          </div>

          <span className={styles.divider} aria-hidden="true" />

          <div className={styles.accessibilityControls} role="group" aria-label="Accessibility Controls">
            <button
              className={styles.accessBtn}
              onClick={() => handleFontSize('sm')}
              aria-label="Decrease font size"
              title={t('Small Text', 'छोटा टेक्स्ट')}
            >
              A-
            </button>
            <button
              className={styles.accessBtn}
              onClick={() => handleFontSize('md')}
              aria-label="Normal font size"
              title={t('Normal Text', 'सामान्य टेक्स्ट')}
            >
              A
            </button>
            <button
              className={styles.accessBtn}
              onClick={() => handleFontSize('lg')}
              aria-label="Increase font size"
              title={t('Large Text', 'बड़ा टेक्स्ट')}
            >
              A+
            </button>
            <button
              className={styles.accessBtn}
              onClick={toggleContrast}
              aria-label="Toggle high contrast"
              title={t('High Contrast', 'उच्च कंट्रास्ट')}
            >
              ◐
            </button>
          </div>

          <span className={styles.divider} aria-hidden="true" />

          <button
            className={styles.langToggle}
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
          >
            {language === 'en' ? 'हिंदी' : 'English'}
          </button>

          <a href="tel:112" className={styles.emergencyLink}>
            🚨 {t('Emergency: 112', 'आपातकालीन: 112')}
          </a>
        </div>
      </div>
    </div>
  );
}
