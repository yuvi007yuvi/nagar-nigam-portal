'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './TendersAndCirculars.module.css';
import { FaFileAlt, FaChevronRight } from 'react-icons/fa';

type Tab = 'tenders' | 'circulars' | 'orders';

const mockData = {
  tenders: [
    { id: 1, title: 'Tender for Solid Waste Management in Zone 3', date: '2026-07-20', new: true },
    { id: 2, title: 'Construction of New Community Hall in Ward 15', date: '2026-07-18', new: true },
    { id: 3, title: 'Supply of LED Street Lights for Main Roads', date: '2026-07-15', new: false },
  ],
  circulars: [
    { id: 1, title: 'Guidelines for Monsoon Season Preparedness', date: '2026-07-10', new: true },
    { id: 2, title: 'Public Notice: Ban on Single-Use Plastic', date: '2026-06-25', new: false },
    { id: 3, title: 'Revised Property Tax Rates for Commercial Buildings', date: '2026-06-15', new: false },
  ],
  orders: [
    { id: 1, title: 'Office Order: Transfer of Junior Engineers', date: '2026-07-12', new: true },
    { id: 2, title: 'Promotion List of Class IV Employees', date: '2026-07-05', new: false },
  ]
};

export default function TendersAndCirculars() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('tenders');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString(language === 'hi' ? 'hi-IN' : 'en-US', { month: 'short' });
    return { day, month };
  };

  return (
    <section className={styles.section} aria-labelledby="tenders-heading">
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconWrapper}>
            <FaFileAlt size={16} />
          </div>
          <h2 id="tenders-heading" className={styles.title}>
            {t('Official Documents', 'आधिकारिक दस्तावेज')}
          </h2>
        </div>
        <Link href={`/${activeTab}`} className={styles.viewAll}>
          {t('View All', 'सभी देखें')} <FaChevronRight size={12} />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.tabs} role="tablist">
          <button 
            role="tab"
            aria-selected={activeTab === 'tenders'}
            className={`${styles.tab} ${activeTab === 'tenders' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('tenders')}
          >
            {t('Tenders', 'निविदाएं')}
          </button>
          <button 
            role="tab"
            aria-selected={activeTab === 'circulars'}
            className={`${styles.tab} ${activeTab === 'circulars' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('circulars')}
          >
            {t('Circulars', 'परिपत्र')}
          </button>
          <button 
            role="tab"
            aria-selected={activeTab === 'orders'}
            className={`${styles.tab} ${activeTab === 'orders' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            {t('Office Orders', 'कार्यालय आदेश')}
          </button>
        </div>

        <div className={styles.list} role="tabpanel">
          <div className={styles.scrollingContent}>
            {mockData[activeTab].map((item) => {
              const { day, month } = formatDate(item.date);
              return (
                <div key={item.id} className={styles.item}>
                  <div className={styles.dateBox}>
                    <span className={styles.day}>{day}</span>
                    <span className={styles.month}>{month}</span>
                  </div>
                  <div className={styles.itemContent}>
                    <h3 className={styles.itemTitle}>
                      {item.title}
                      {item.new && (
                        <span className="badge-new" style={{ marginLeft: '8px', fontSize: '10px', padding: '2px 6px', background: '#EF4444', color: 'white', borderRadius: '4px' }}>
                          {t('NEW', 'नया')}
                        </span>
                      )}
                    </h3>
                    <Link href={`/documents/${item.id}`} className={styles.link}>
                      {t('Download PDF', 'पीडीएफ डाउनलोड करें')}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
