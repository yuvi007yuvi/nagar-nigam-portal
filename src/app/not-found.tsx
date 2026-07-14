'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './shared.module.css';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundCode}>404</div>
      <h1 className={styles.notFoundTitle}>
        {t('Page Not Found', 'पृष्ठ नहीं मिला')}
      </h1>
      <p className={styles.notFoundDesc}>
        {t(
          'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
          'आप जिस पृष्ठ को खोज रहे हैं उसे हटा दिया गया होगा, उसका नाम बदल दिया गया होगा, या वह अस्थायी रूप से अनुपलब्ध है।'
        )}
      </p>
      <Link href="/" className={styles.notFoundBtn}>
        {t('Return to Homepage', 'मुखपृष्ठ पर लौटें')}
      </Link>
    </div>
  );
}
