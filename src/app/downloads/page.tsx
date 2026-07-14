'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from '../shared.module.css';

export default function DownloadsPage() {
  const { language, t } = useLanguage();

  const categories = [
    {
      id: 'forms',
      titleEn: 'Application Forms',
      titleHi: 'आवेदन पत्र',
      icon: '📄',
      items: [
        { nameEn: 'Property Tax Assessment Form', nameHi: 'संपत्ति कर निर्धारण प्रपत्र', size: '2.4 MB' },
        { nameEn: 'Trade License Application', nameHi: 'व्यापार लाइसेंस आवेदन', size: '1.1 MB' },
        { nameEn: 'Birth/Death Certificate Form', nameHi: 'जन्म/मृत्यु प्रमाण पत्र प्रपत्र', size: '1.8 MB' },
      ],
    },
    {
      id: 'reports',
      titleEn: 'Annual Reports',
      titleHi: 'वार्षिक रिपोर्ट',
      icon: '📊',
      items: [
        { nameEn: 'Annual Budget 2023-24', nameHi: 'वार्षिक बजट 2023-24', size: '5.2 MB' },
        { nameEn: 'Smart City Progress Report', nameHi: 'स्मार्ट सिटी प्रगति रिपोर्ट', size: '8.4 MB' },
      ],
    },
    {
      id: 'guidelines',
      titleEn: 'Rules & Guidelines',
      titleHi: 'नियम एवं दिशानिर्देश',
      icon: '📜',
      items: [
        { nameEn: 'Solid Waste Management Rules', nameHi: 'ठोस अपशिष्ट प्रबंधन नियम', size: '3.1 MB' },
        { nameEn: 'Building Bye-laws', nameHi: 'भवन उपनियम', size: '4.5 MB' },
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.pageBanner}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t('Home', 'होम')}</Link>
            <span>/</span>
            <span>{t('Downloads', 'डाउनलोड')}</span>
          </nav>
          <h1 className={styles.pageTitle}>{t('Downloads', 'डाउनलोड')}</h1>
          <p className={styles.pageDesc}>
            {t(
              'Download application forms, reports, guidelines, and other important documents.',
              'आवेदन पत्र, रिपोर्ट, दिशानिर्देश और अन्य महत्वपूर्ण दस्तावेज डाउनलोड करें।'
            )}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          {categories.map((cat) => (
            <div key={cat.id} style={{ marginBottom: '3rem' }}>
              <h2 className={styles.cardTitle} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {cat.icon} {language === 'en' ? cat.titleEn : cat.titleHi}
              </h2>
              <div className={styles.downloadGrid}>
                {cat.items.map((item, idx) => (
                  <a key={idx} href="#" className={styles.downloadCard} onClick={(e) => e.preventDefault()}>
                    <div className={styles.downloadIcon}>📄</div>
                    <div className={styles.downloadInfo}>
                      <div className={styles.downloadTitle}>{language === 'en' ? item.nameEn : item.nameHi}</div>
                      <div className={styles.downloadMeta}>PDF • {item.size}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
