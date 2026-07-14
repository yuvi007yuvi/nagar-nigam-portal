'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from '../shared.module.css';

export default function RegisterPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <div className={styles.authLogo}>📝</div>
          <h1 className={styles.authTitle}>
            {t('Citizen Registration', 'नागरिक पंजीकरण')}
          </h1>
          <p className={styles.authSubtitle}>
            {t('Create an account to access municipal services online', 'ऑनलाइन नगरपालिका सेवाओं तक पहुंचने के लिए खाता बनाएं')}
          </p>
        </div>
        
        <div className={styles.authBody}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>{t('Full Name', 'पूरा नाम')}</label>
              <input type="text" className={styles.formInput} placeholder={t('Enter your full name', 'अपना पूरा नाम दर्ज करें')} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>{t('Mobile Number', 'मोबाइल नंबर')}</label>
              <input type="tel" className={styles.formInput} placeholder={t('Enter 10-digit number', '10-अंकीय नंबर दर्ज करें')} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>{t('Email Address (Optional)', 'ईमेल पता (वैकल्पिक)')}</label>
              <input type="email" className={styles.formInput} placeholder={t('Enter your email', 'अपना ईमेल दर्ज करें')} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>{t('Create Password', 'पासवर्ड बनाएं')}</label>
              <input type="password" className={styles.formInput} placeholder="••••••••" required />
            </div>
            
            <button type="submit" className={styles.formBtn} style={{ marginTop: '1rem' }}>
              {t('Register', 'पंजीकरण करें')}
            </button>
          </form>

          <div className={styles.authFooter}>
            {t('Already have an account?', 'क्या आपके पास पहले से खाता है?')} <Link href="/login">{t('Login Here', 'यहां लॉगिन करें')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
