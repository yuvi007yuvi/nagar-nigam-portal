'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { newsItems } from '@/data/news';
import styles from '../shared.module.css';
import newsStyles from '@/components/sections/NewsSection.module.css';

export default function NewsPage() {
  const { language, t } = useLanguage();

  const categoryColors: Record<string, string> = {
    development: '#2E7D32',
    announcement: '#F57C00',
    health: '#D32F2F',
    education: '#1565C0',
    event: '#7B1FA2',
    general: '#455A64',
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageBanner}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t('Home', 'होम')}</Link>
            <span>/</span>
            <span>{t('News & Updates', 'समाचार एवं अपडेट')}</span>
          </nav>
          <h1 className={styles.pageTitle}>{t('News & Updates', 'समाचार एवं अपडेट')}</h1>
          <p className={styles.pageDesc}>
            {t(
              'Stay updated with the latest news, announcements, and events from Nagar Nigam Mathura-Vrindavan.',
              'नगर निगम मथुरा-वृन्दावन से नवीनतम समाचारों, घोषणाओं और घटनाओं के साथ अपडेट रहें।'
            )}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {newsItems.map((item) => (
              <Link key={item.id} href={`/news/${item.slug}`} className={newsStyles.card}>
                <div className={newsStyles.cardImage}>
                  <Image src={item.image} alt="" fill style={{ objectFit: 'cover' }} />
                  <span
                    className={newsStyles.cardCategory}
                    style={{ background: categoryColors[item.category] || categoryColors.general }}
                  >
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
                <div className={newsStyles.cardBody}>
                  <time className={newsStyles.cardDate} dateTime={item.date}>
                    📅 {new Date(item.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <h3 className={newsStyles.cardTitle}>
                    {language === 'en' ? item.titleEn : item.titleHi}
                  </h3>
                  <p className={newsStyles.cardExcerpt}>
                    {language === 'en' ? item.excerptEn : item.excerptHi}
                  </p>
                  <span className={newsStyles.readMore}>
                    {t('Read More →', 'और पढ़ें →')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
