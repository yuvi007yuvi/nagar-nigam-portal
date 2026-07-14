'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { notices } from '@/data/notices';
import styles from './NoticeBoard.module.css';

export default function NoticeBoard() {
  const { language, t } = useLanguage();

  const categoryLabels: Record<string, { en: string; hi: string; color: string; icon: string }> = {
    circular: { en: 'Circular', hi: 'परिपत्र', color: '#1565C0', icon: '📄' },
    recruitment: { en: 'Recruitment', hi: 'भर्ती', color: '#2E7D32', icon: '👥' },
    tender: { en: 'Tender', hi: 'निविदा', color: '#F57C00', icon: '📋' },
    rti: { en: 'RTI', hi: 'आरटीआई', color: '#7B1FA2', icon: '📂' },
    press: { en: 'Press Release', hi: 'प्रेस विज्ञप्ति', color: '#455A64', icon: '📰' },
    emergency: { en: 'Emergency', hi: 'आपातकालीन', color: '#D32F2F', icon: '🚨' },
  };

  return (
    <section className={styles.section} aria-labelledby="notice-heading">
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2 id="notice-heading" className={styles.title}>
            {t('Notice Board', 'सूचना पट्ट')}
          </h2>
          <div className={styles.titleBar} aria-hidden="true" />
        </div>

        <div className={styles.timeline}>
          <div className={styles.scrollingWrapper}>
            <div className={styles.scrollingContent}>
              {notices.map((notice) => {
                const cat = categoryLabels[notice.category] || categoryLabels.circular;
                return (
                  <div key={notice.id} className={styles.timelineItem}>
                    <div className={styles.timelineDot} style={{ background: cat.color }} aria-hidden="true" />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineMeta}>
                        <span className={styles.timelineCategory} style={{ background: cat.color }}>
                          {cat.icon} {language === 'en' ? cat.en : cat.hi}
                        </span>
                        {notice.isNew && (
                          <span className={styles.newBadge}>{t('NEW', 'नया')}</span>
                        )}
                        <time className={styles.timelineDate} dateTime={notice.date}>
                          {new Date(notice.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                      <h3 className={styles.timelineTitle}>
                        {language === 'en' ? notice.titleEn : notice.titleHi}
                      </h3>
                      {notice.pdfUrl && (
                        <a href={notice.pdfUrl} className={styles.downloadLink} target="_blank" rel="noopener noreferrer">
                          📥 {t('Download PDF', 'PDF डाउनलोड करें')}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Duplicate for seamless vertical scrolling */}
            <div className={styles.scrollingContent}>
              {notices.map((notice) => {
                const cat = categoryLabels[notice.category] || categoryLabels.circular;
                return (
                  <div key={`dup-${notice.id}`} className={styles.timelineItem}>
                    <div className={styles.timelineDot} style={{ background: cat.color }} aria-hidden="true" />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineMeta}>
                        <span className={styles.timelineCategory} style={{ background: cat.color }}>
                          {cat.icon} {language === 'en' ? cat.en : cat.hi}
                        </span>
                        {notice.isNew && (
                          <span className={styles.newBadge}>{t('NEW', 'नया')}</span>
                        )}
                        <time className={styles.timelineDate} dateTime={notice.date}>
                          {new Date(notice.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                      <h3 className={styles.timelineTitle}>
                        {language === 'en' ? notice.titleEn : notice.titleHi}
                      </h3>
                      {notice.pdfUrl && (
                        <a href={notice.pdfUrl} className={styles.downloadLink} target="_blank" rel="noopener noreferrer">
                          📥 {t('Download PDF', 'PDF डाउनलोड करें')}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
