'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { services } from '@/data/services';
import styles from './services.module.css';

export default function ServicesPage() {
  const { language, t } = useLanguage();

  const categories = [
    { key: 'all', en: 'All Services', hi: 'सभी सेवाएं' },
    { key: 'tax', en: 'Tax & Revenue', hi: 'कर और राजस्व' },
    { key: 'certificate', en: 'Certificates', hi: 'प्रमाणपत्र' },
    { key: 'complaint', en: 'Complaints', hi: 'शिकायतें' },
    { key: 'license', en: 'License & Permission', hi: 'लाइसेंस एवं अनुमति' },
    { key: 'utility', en: 'Utility Services', hi: 'उपयोगिता सेवाएं' },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.pageBanner}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t('Home', 'होम')}</Link>
            <span>/</span>
            <span>{t('Citizen Services', 'नागरिक सेवाएं')}</span>
          </nav>
          <h1 className={styles.pageTitle}>{t('Citizen Services', 'नागरिक सेवाएं')}</h1>
          <p className={styles.pageDesc}>
            {t(
              'Access all municipal services online. Pay taxes, apply for certificates, register complaints and more.',
              'सभी नगरपालिका सेवाओं को ऑनलाइन एक्सेस करें। कर भुगतान, प्रमाणपत्र आवेदन, शिकायत दर्ज करें।'
            )}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button key={cat.key} className={styles.filterBtn}>
                {language === 'en' ? cat.en : cat.hi}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {services.map((service) => (
              <Link key={service.id} href={service.href} className={styles.card}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>
                    {language === 'en' ? service.titleEn : service.titleHi}
                  </h2>
                  <p className={styles.cardDesc}>
                    {language === 'en' ? service.descriptionEn : service.descriptionHi}
                  </p>
                  <div className={styles.cardFooter}>
                    <span className={`${styles.cardBadge} ${service.isOnline ? styles.online : styles.offline}`}>
                      {service.isOnline ? t('Online', 'ऑनलाइन') : t('Coming Soon', 'जल्द')}
                    </span>
                    <span className={styles.cardArrow}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
