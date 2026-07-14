'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { departments } from '@/data/departments';
import styles from '../shared.module.css';

export default function DepartmentsPage() {
  const { language, t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.pageBanner}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t('Home', 'होम')}</Link>
            <span>/</span>
            <span>{t('Departments', 'विभाग')}</span>
          </nav>
          <h1 className={styles.pageTitle}>{t('Municipal Departments', 'नगरपालिका विभाग')}</h1>
          <p className={styles.pageDesc}>
            {t(
              'Explore the various departments working together to manage and develop Mathura-Vrindavan.',
              'मथुरा-वृन्दावन के प्रबंधन और विकास के लिए एक साथ काम कर रहे विभिन्न विभागों का अन्वेषण करें।'
            )}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {departments.map((dept) => (
              <Link key={dept.id} href={`/departments/${dept.slug}`} className={styles.card}>
                <div className={styles.cardIcon}>{dept.icon}</div>
                <h2 className={styles.cardTitle}>
                  {language === 'en' ? dept.nameEn : dept.nameHi}
                </h2>
                <p className={styles.cardDesc}>
                  {language === 'en' ? dept.descriptionEn : dept.descriptionHi}
                </p>
                <div className={styles.cardOfficer}>
                  <strong>{t('Head:', 'प्रमुख:')}</strong> {dept.officerName}
                </div>
                <div className={styles.cardContact}>
                  📞 {dept.phone}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
