'use client';

import { useLanguage } from '@/lib/LanguageContext';
import styles from './NewsTicker.module.css';

export default function NewsTicker() {
  const { t } = useLanguage();

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerLabel}>
        <span className={styles.pulsingDot}></span>
        <span className={styles.bellIcon}>🔔</span>
        {t('LATEST UPDATES', 'नवीनतम अपडेट')}
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          <span>{t('Welcome to Nagar Nigam Mathura-Vrindavan official portal.', 'नगर निगम मथुरा-वृन्दावन आधिकारिक पोर्टल पर आपका स्वागत है।')}</span>
          <span className={styles.separator}>✦</span>
          <span>{t('Pay your property tax online before 31st March to avoid penalty.', 'जुर्माने से बचने के लिए 31 मार्च से पहले ऑनलाइन संपत्ति कर का भुगतान करें।')}</span>
          <span className={styles.separator}>✦</span>
          <span>{t('Clean city, Green city! Support Swachh Bharat Abhiyan.', 'स्वच्छ शहर, हरा शहर! स्वच्छ भारत अभियान का समर्थन करें।')}</span>
          <span className={styles.separator}>✦</span>
        </div>
        {/* Duplicate for seamless scrolling loop */}
        <div className={styles.marqueeContent}>
          <span>{t('Welcome to Nagar Nigam Mathura-Vrindavan official portal.', 'नगर निगम मथुरा-वृन्दावन आधिकारिक पोर्टल पर आपका स्वागत है।')}</span>
          <span className={styles.separator}>✦</span>
          <span>{t('Pay your property tax online before 31st March to avoid penalty.', 'जुर्माने से बचने के लिए 31 मार्च से पहले ऑनलाइन संपत्ति कर का भुगतान करें।')}</span>
          <span className={styles.separator}>✦</span>
          <span>{t('Clean city, Green city! Support Swachh Bharat Abhiyan.', 'स्वच्छ शहर, हरा शहर! स्वच्छ भारत अभियान का समर्थन करें।')}</span>
          <span className={styles.separator}>✦</span>
        </div>
      </div>
    </div>
  );
}
