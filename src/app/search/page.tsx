'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from '../shared.module.css';

export default function SearchPage() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: t('All Results', 'सभी परिणाम') },
    { id: 'services', label: t('Services', 'सेवाएं') },
    { id: 'news', label: t('News', 'समाचार') },
    { id: 'documents', label: t('Documents', 'दस्तावेज़') },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.pageBanner}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>{t('Search', 'खोज')}</h1>
          <p className={styles.pageDesc}>
            {t('Search across services, news, documents, and more.', 'सेवाओं, समाचारों, दस्तावेज़ों आदि में खोजें।')}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.searchBox}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder={t('What are you looking for?', 'आप क्या ढूंढ रहे हैं?')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>

          <div className={styles.searchTabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.searchTab} ${activeTab === tab.id ? styles.searchTabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-tertiary)' }}>
            {query.length > 0 ? (
              <p>{t('No results found for', 'के लिए कोई परिणाम नहीं मिला')}: <strong>&quot;{query}&quot;</strong></p>
            ) : (
              <p>{t('Enter a search term above to see results.', 'परिणाम देखने के लिए ऊपर एक खोज शब्द दर्ज करें।')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
