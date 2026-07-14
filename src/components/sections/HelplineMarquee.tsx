'use client';

import { useLanguage } from '@/lib/LanguageContext';
import styles from './HelplineMarquee.module.css';

export default function HelplineMarquee() {
  const { t } = useLanguage();

  const helplines = [
    { label: t('Toll Free Number', 'टोल फ्री नंबर'), number: '1533' },
    { label: t('Sewer Cleaning (Safai Mitra)', 'सीवर सफाई (सफाई मित्र)'), number: '14420' },
    { label: t('Mathura Zone', 'मथुरा जोन'), number: '0565 2503632' },
    { label: t('Vrindavan Zone', 'वृन्दावन जोन'), number: '0565 2442331' },
    { label: t('Control Room', 'कंट्रोल रूम'), number: '0565 2470480' },
  ];

  return (
    <section className={styles.helplineSection}>
      <div className={styles.container}>
        <div className={styles.helplineBox}>
          <div className={styles.helplineHeader}>
            <h3 className={styles.helplineTitle}>{t('Helpline Numbers', 'हेल्पलाइन नंबर')}</h3>
          </div>
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeWrapper}>
              <div className={styles.marqueeContent}>
                {helplines.map((helpline, index) => (
                  <div key={index} className={styles.helplineItem}>
                    <span className={styles.helplineLabel}>{helpline.label}</span>
                    <span className={styles.colon}>:</span>
                    <span className={styles.helplineNumber}>{helpline.number}</span>
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless scrolling */}
              <div className={styles.marqueeContent}>
                {helplines.map((helpline, index) => (
                  <div key={`dup-${index}`} className={styles.helplineItem}>
                    <span className={styles.helplineLabel}>{helpline.label}</span>
                    <span className={styles.colon}>:</span>
                    <span className={styles.helplineNumber}>{helpline.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
