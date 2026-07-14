'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from '../shared.module.css';

export default function LoginPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'citizen' | 'officer'>('citizen');

  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <div className={styles.authLogo}>🏛️</div>
          <h1 className={styles.authTitle}>
            {t('Welcome Back', 'वापसी पर स्वागत है')}
          </h1>
          <p className={styles.authSubtitle}>
            {t('Login to Nagar Nigam Mathura-Vrindavan Portal', 'नगर निगम मथुरा-वृन्दावन पोर्टल में लॉगिन करें')}
          </p>
        </div>
        
        <div className={styles.authBody}>
          <div className={styles.authTabs}>
            <button
              className={`${styles.authTab} ${activeTab === 'citizen' ? styles.authTabActive : ''}`}
              onClick={() => setActiveTab('citizen')}
            >
              {t('Citizen Login', 'नागरिक लॉगिन')}
            </button>
            <button
              className={`${styles.authTab} ${activeTab === 'officer' ? styles.authTabActive : ''}`}
              onClick={() => setActiveTab('officer')}
            >
              {t('Officer Login', 'अधिकारी लॉगिन')}
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                {activeTab === 'citizen' ? t('Mobile Number / Email', 'मोबाइल नंबर / ईमेल') : t('Employee ID / Email', 'कर्मचारी आईडी / ईमेल')}
              </label>
              <input type="text" className={styles.formInput} placeholder={t('Enter your details', 'अपना विवरण दर्ज करें')} required />
            </div>
            <div className={styles.formGroup} style={{ marginBottom: 0 }}>
              <label className={styles.formLabel}>{t('Password', 'पासवर्ड')}</label>
              <input type="password" className={styles.formInput} placeholder="••••••••" required />
            </div>
            <Link href="#" className={styles.authLink}>
              {t('Forgot Password?', 'पासवर्ड भूल गए?')}
            </Link>
            <button type="submit" className={styles.formBtn}>
              {t('Login', 'लॉगिन करें')}
            </button>
          </form>

          {activeTab === 'citizen' && (
            <div className={styles.authFooter}>
              {t('Don\'t have an account?', 'क्या आपके पास खाता नहीं है?')} <Link href="/register">{t('Register Now', 'अभी पंजीकरण करें')}</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
