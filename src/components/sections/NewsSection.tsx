'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { newsItems } from '@/data/news';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  const { language, t } = useLanguage();
  const displayNews = newsItems.slice(0, 3);

  const categoryColors: Record<string, string> = {
    development: '#2E7D32',
    announcement: '#F57C00',
    health: '#D32F2F',
    education: '#1565C0',
    event: '#7B1FA2',
    general: '#455A64',
  };

  return (
    <section className={styles.section} aria-labelledby="news-heading">
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2 id="news-heading" className={styles.title}>
            {t('Latest News & Updates', 'ताजा समाचार एवं अपडेट')}
          </h2>
          <div className={styles.titleBar} aria-hidden="true" />
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.scrollingWrapper}>
            <div className={styles.scrollingContent}>
              {displayNews.map((item) => (
                <Link key={item.id} href={`/news/${item.slug}`} className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image src={item.image} alt="" fill style={{ objectFit: 'cover' }} />
                    <span
                      className={styles.cardCategory}
                      style={{ background: categoryColors[item.category] || categoryColors.general }}
                    >
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <time className={styles.cardDate} dateTime={item.date}>
                      📅 {new Date(item.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <h3 className={styles.cardTitle}>
                      {language === 'en' ? item.titleEn : item.titleHi}
                    </h3>
                    <p className={styles.cardExcerpt}>
                      {language === 'en' ? item.excerptEn : item.excerptHi}
                    </p>
                    <span className={styles.readMore}>
                      {t('Read More →', 'और पढ़ें →')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {/* Duplicate for seamless vertical scrolling */}
            <div className={styles.scrollingContent}>
              {displayNews.map((item) => (
                <Link key={`dup-${item.id}`} href={`/news/${item.slug}`} className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image src={item.image} alt="" fill style={{ objectFit: 'cover' }} />
                    <span
                      className={styles.cardCategory}
                      style={{ background: categoryColors[item.category] || categoryColors.general }}
                    >
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <time className={styles.cardDate} dateTime={item.date}>
                      📅 {new Date(item.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <h3 className={styles.cardTitle}>
                      {language === 'en' ? item.titleEn : item.titleHi}
                    </h3>
                    <p className={styles.cardExcerpt}>
                      {language === 'en' ? item.excerptEn : item.excerptHi}
                    </p>
                    <span className={styles.readMore}>
                      {t('Read More →', 'और पढ़ें →')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.viewAll}>
          <Link href="/news" className={styles.viewAllBtn}>
            {t('View All News', 'सभी समाचार देखें')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
