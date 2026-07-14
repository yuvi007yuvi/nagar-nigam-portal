'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { tenders } from '@/data/tenders';
import styles from '../shared.module.css';

export default function TendersPage() {
  const { language, t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.pageBanner}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t('Home', 'होम')}</Link>
            <span>/</span>
            <span>{t('Tenders', 'निविदाएं')}</span>
          </nav>
          <h1 className={styles.pageTitle}>{t('Active Tenders', 'सक्रिय निविदाएं')}</h1>
          <p className={styles.pageDesc}>
            {t(
              'View all active, upcoming, and closed tenders published by Nagar Nigam Mathura-Vrindavan.',
              'नगर निगम मथुरा-वृन्दावन द्वारा प्रकाशित सभी सक्रिय, आगामी और बंद निविदाएं देखें।'
            )}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t('Tender No.', 'निविदा संख्या')}</th>
                <th>{t('Title', 'शीर्षक')}</th>
                <th>{t('Department', 'विभाग')}</th>
                <th>{t('Closing Date', 'अंतिम तिथि')}</th>
                <th>{t('Status', 'स्थिति')}</th>
                <th>{t('Action', 'कार्रवाई')}</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((tender) => (
                <tr key={tender.id}>
                  <td>{tender.referenceNumber}</td>
                  <td>{language === 'en' ? tender.titleEn : tender.titleHi}</td>
                  <td>{tender.department}</td>
                  <td>
                    {new Date(tender.lastDate).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN')}
                  </td>
                  <td>
                    <span className={tender.status === 'open' ? styles.statusOpen : tender.status === 'closed' ? styles.statusClosed : styles.statusUpcoming}>
                      {tender.status === 'open' ? t('Open', 'खुला') : tender.status === 'closed' ? t('Closed', 'बंद') : t('Upcoming', 'आगामी')}
                    </span>
                  </td>
                  <td>
                    <a href={tender.pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                      📥 PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
