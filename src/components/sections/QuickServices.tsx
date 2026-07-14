'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { services } from '@/data/services';
import styles from './QuickServices.module.css';

export default function QuickServices() {
  const { language, t } = useLanguage();

  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2 id="services-heading" className={styles.title}>
            {t('Citizen Services', 'नागरिक सेवाएं')}
          </h2>
          <div className={styles.titleBar} aria-hidden="true" />
          <p className={styles.subtitle}>
            {t(
              'Access all municipal services online — fast, secure and transparent',
              'सभी नगरपालिका सेवाओं को ऑनलाइन एक्सेस करें — तेज, सुरक्षित और पारदर्शी'
            )}
          </p>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeContent}>
              {services.map((service) => (
                <Link key={service.id} href={service.href} className={styles.card}>
                  <div className={styles.cardIcon}>
                    <span>{service.icon}</span>
                  </div>
                  <h3 className={styles.cardTitle}>
                    {language === 'en' ? service.titleEn : service.titleHi}
                  </h3>
                  <p className={styles.cardDesc}>
                    {language === 'en' ? service.descriptionEn : service.descriptionHi}
                  </p>
                  <span className={`${styles.cardBadge} ${!service.isOnline ? styles.cardBadgeOffline : ''}`}>
                    {service.isOnline
                      ? t('Online', 'ऑनलाइन')
                      : t('Coming Soon', 'जल्द आ रहा है')}
                  </span>
                </Link>
              ))}
            </div>
            {/* Duplicate for seamless scrolling */}
            <div className={styles.marqueeContent}>
              {services.map((service) => (
                <Link key={`dup-${service.id}`} href={service.href} className={styles.card}>
                  <div className={styles.cardIcon}>
                    <span>{service.icon}</span>
                  </div>
                  <h3 className={styles.cardTitle}>
                    {language === 'en' ? service.titleEn : service.titleHi}
                  </h3>
                  <p className={styles.cardDesc}>
                    {language === 'en' ? service.descriptionEn : service.descriptionHi}
                  </p>
                  <span className={`${styles.cardBadge} ${!service.isOnline ? styles.cardBadgeOffline : ''}`}>
                    {service.isOnline
                      ? t('Online', 'ऑनलाइन')
                      : t('Coming Soon', 'जल्द आ रहा है')}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
