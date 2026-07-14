'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './InformationWidgets.module.css';

export default function InformationWidgets() {
  const { t } = useLanguage();

  return (
    <section className={styles.widgetsSection}>
      <div className={styles.container}>
        <div className={styles.widgetsGrid}>
          
          {/* About Nagar Nigam */}
          <div className={styles.widgetCard}>
            <div className={`${styles.widgetHeader} ${styles.bgBlue}`}>
              {t('About Nagar Nigam', 'नगर निगम के बारे में')}
            </div>
            <ul className={styles.widgetList}>
              <li>
                <Link href="/about/introduction" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('Introduction', 'परिचय')}
                </Link>
              </li>
              <li>
                <Link href="/about/history" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('History of Nagar Nigam', 'नगर निगम का इतिहास')}
                </Link>
              </li>
              <li>
                <Link href="/about/objectives" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('Aims & Objectives', 'लक्ष्य और उद्देश्य')}
                </Link>
              </li>
              <li>
                <Link href="/about/city" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('About City', 'शहर के बारे में')}
                </Link>
              </li>
            </ul>
            <Link href="/about" className={styles.viewMore}>
              {t('View More', 'और देखें')} »
            </Link>
          </div>

          {/* Online Services */}
          <div className={styles.widgetCard}>
            <div className={`${styles.widgetHeader} ${styles.bgTeal}`}>
              {t('Online Services', 'ऑनलाइन सेवाएं')}
            </div>
            <ul className={styles.widgetList}>
              <li>
                <Link href="/services/complaints" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('Complaint', 'शिकायत')}
                </Link>
              </li>
              <li>
                <Link href="/services/certificates/birth" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('Birth Certificate', 'जन्म प्रमाण पत्र')}
                </Link>
              </li>
              <li>
                <Link href="/services/certificates/death" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('Death Certificate', 'मृत्यु प्रमाण पत्र')}
                </Link>
              </li>
              <li>
                <Link href="/tenders" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('Online e-Tenders', 'ऑनलाइन ई-निविदाएं')}
                </Link>
              </li>
            </ul>
            <Link href="/services" className={styles.viewMore}>
              {t('View More', 'और देखें')} »
            </Link>
          </div>

          {/* Information */}
          <div className={styles.widgetCard}>
            <div className={`${styles.widgetHeader} ${styles.bgRed}`}>
              {t('Information', 'जानकारी')}
            </div>
            <ul className={styles.widgetList}>
              <li>
                <Link href="/information/officers" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('Officers List', 'अधिकारियों की सूची')}
                </Link>
              </li>
              <li>
                <Link href="/information/wards" className={styles.widgetLink}>
                  <span className={styles.arrow}>➔</span> {t('Wards & Zones', 'वार्ड और ज़ोन')}
                </Link>
              </li>
            </ul>
            <div className={styles.viewMoreWrapper}>
              <Link href="/information" className={styles.viewMore}>
                {t('View More', 'और देखें')} »
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
