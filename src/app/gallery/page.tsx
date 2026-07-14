'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from '../shared.module.css';

const galleryItems = [
  { id: '1', src: '/images/hero-banner.png', titleEn: 'Smart City Project Inauguration', titleHi: 'स्मार्ट सिटी प्रोजेक्ट उद्घाटन' },
  { id: '2', src: '/images/mayor.png', titleEn: 'Mayor taking oath', titleHi: 'महापौर की शपथ ग्रहण' },
  { id: '3', src: '/images/commissioner.png', titleEn: 'Commissioner addressing the public', titleHi: 'नगर आयुक्त जनता को संबोधित करते हुए' },
];

export default function GalleryPage() {
  const { language, t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.pageBanner}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t('Home', 'होम')}</Link>
            <span>/</span>
            <span>{t('Photo Gallery', 'फोटो गैलरी')}</span>
          </nav>
          <h1 className={styles.pageTitle}>{t('Photo Gallery', 'फोटो गैलरी')}</h1>
          <p className={styles.pageDesc}>
            {t(
              'Glimpses of various events, projects, and activities by Nagar Nigam Mathura-Vrindavan.',
              'नगर निगम मथुरा-वृन्दावन द्वारा विभिन्न कार्यक्रमों, परियोजनाओं और गतिविधियों की झलकियां।'
            )}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.gallery}>
            {galleryItems.map((item) => (
              <div key={item.id} className={styles.galleryItem}>
                <Image src={item.src} alt={language === 'en' ? item.titleEn : item.titleHi} width={600} height={400} className={styles.galleryImage} />
                <div className={styles.galleryCaption}>
                  {language === 'en' ? item.titleEn : item.titleHi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
