'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from '../shared.module.css';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.pageBanner}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t('Home', 'होम')}</Link>
            <span>/</span>
            <span>{t('Contact Us', 'संपर्क करें')}</span>
          </nav>
          <h1 className={styles.pageTitle}>{t('Contact Us', 'संपर्क करें')}</h1>
          <p className={styles.pageDesc}>
            {t(
              'Get in touch with Nagar Nigam Mathura-Vrindavan for any queries, support, or feedback.',
              'किसी भी प्रश्न, सहायता या प्रतिक्रिया के लिए नगर निगम मथुरा-वृन्दावन से संपर्क करें।'
            )}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>📍</div>
                <div>
                  <div className={styles.contactItemLabel}>{t('Head Office', 'प्रधान कार्यालय')}</div>
                  <div className={styles.contactItemValue}>
                    {t(
                      'Bhuteshwar Jalkal Compound, Mathura, Uttar Pradesh - 281001',
                      'भूतेश्वर जलकल कंपाउंड, मथुरा, उत्तर प्रदेश - 281001'
                    )}
                  </div>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>📞</div>
                <div>
                  <div className={styles.contactItemLabel}>{t('Phone', 'फ़ोन')}</div>
                  <div className={styles.contactItemValue}>
                    <a href="tel:05652503632">0565-2503632</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>🚨</div>
                <div>
                  <div className={styles.contactItemLabel}>{t('Toll Free Helpline', 'टोल फ्री हेल्पलाइन')}</div>
                  <div className={styles.contactItemValue}>
                    <a href="tel:1533">1533</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>📧</div>
                <div>
                  <div className={styles.contactItemLabel}>{t('Email', 'ईमेल')}</div>
                  <div className={styles.contactItemValue}>
                    <a href="mailto:nagarayuktmathura@gmail.com">nagarayuktmathura@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
              <h2 className={styles.cardTitle} style={{ marginBottom: '1rem' }}>
                {t('Send us a message', 'हमें एक संदेश भेजें')}
              </h2>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{t('Full Name', 'पूरा नाम')}</label>
                <input type="text" className={styles.formInput} placeholder={t('Enter your full name', 'अपना पूरा नाम दर्ज करें')} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{t('Email Address', 'ईमेल पता')}</label>
                <input type="email" className={styles.formInput} placeholder={t('Enter your email', 'अपना ईमेल दर्ज करें')} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{t('Subject', 'विषय')}</label>
                <input type="text" className={styles.formInput} placeholder={t('Enter subject', 'विषय दर्ज करें')} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{t('Message', 'संदेश')}</label>
                <textarea className={`${styles.formInput} ${styles.formTextarea}`} placeholder={t('Enter your message', 'अपना संदेश दर्ज करें')} />
              </div>
              <button type="submit" className={styles.formBtn}>
                {t('Send Message', 'संदेश भेजें')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
