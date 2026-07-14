'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './MayorCommissioner.module.css';

export default function MayorCommissioner() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} aria-labelledby="officials-heading">
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2 id="officials-heading" className={styles.title}>
            {t('Our Leadership', 'हमारा नेतृत्व')}
          </h2>
          <div className={styles.titleBar} aria-hidden="true" />
        </div>

        <div className={styles.grid}>
          {/* Commissioner Card */}
          <div className={styles.detailedCard}>
            <div className={styles.cardAccentGreen} />
            
            <div className={styles.cardHeaderGrid}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/commissioner.jpeg"
                  alt={t('SHRI OJASWI RAJ, IAS', 'श्री ओजस्वी राज, आईएएस')}
                  width={160}
                  height={160}
                  className={styles.profileImage}
                />
              </div>
              
              <div className={styles.basicInfo}>
                <div className={styles.designationWrapper}>
                  <span className={styles.designationBadgeGreen}>
                    {t('Municipal Commissioner', 'नगर आयुक्त')}
                  </span>
                  <span className={styles.iasBadge}>IAS</span>
                </div>
                <h3 className={styles.name}>
                  {t('SHRI OJASWI RAJ', 'श्री ओजस्वी राज')}
                </h3>
                
                <p className={styles.bioText}>
                  {t(
                    'Shri Ojaswi Raj, an Indian Administrative Service (IAS) officer, currently serves as the Municipal Commissioner of Nagar Nigam Mathura-Vrindavan. Under his leadership, the municipal corporation is actively working towards the digitization of civic services, sanitation, urban infrastructure, transparent administration, smart governance, and strengthening citizen-centric services.',
                    'श्री ओजस्वी राज, भारतीय प्रशासनिक सेवा (IAS) के अधिकारी हैं तथा वर्तमान में नगर निगम मथुरा-वृन्दावन के नगर आयुक्त के रूप में कार्यरत हैं। इनके नेतृत्व में नगर निगम नागरिक सेवाओं के डिजिटलीकरण, स्वच्छता, शहरी आधारभूत संरचना, पारदर्शी प्रशासन, स्मार्ट गवर्नेंस तथा जन-केंद्रित सेवाओं को सुदृढ़ बनाने हेतु कार्य कर रहा है।'
                  )}
                </p>
              </div>
            </div>

            <div className={styles.visionBlock}>
              "{t(
                'Building a clean, safe, smart, and citizen-friendly Mathura-Vrindavan.',
                'स्वच्छ, सुरक्षित, स्मार्ट एवं नागरिक-अनुकूल मथुरा-वृन्दावन का निर्माण।'
              )}"
            </div>

          </div>

          {/* Mayor Card */}
          <div className={styles.detailedCard}>
            <div className={styles.cardAccent} />
            
            <div className={styles.cardHeaderGrid}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/mayor.jpeg"
                  alt={t('SHRI VINOD AGARWAL', 'श्री विनोद अग्रवाल')}
                  width={160}
                  height={160}
                  className={styles.profileImage}
                />
              </div>
              
              <div className={styles.basicInfo}>
                <div className={styles.designationWrapper}>
                  <span className={styles.designationBadge}>
                    {t('Mayor', 'महापौर')}
                  </span>
                </div>
                <h3 className={styles.name}>
                  {t('SHRI VINOD AGARWAL', 'श्री विनोद अग्रवाल')}
                </h3>
                
                <p className={styles.bioText}>
                  {t(
                    'Shri Vinod Agarwal is the elected Mayor of Nagar Nigam Mathura-Vrindavan. Under his leadership, the municipal corporation is continuously working towards sanitation, infrastructure development, advancement of the religious and tourist city, expansion of digital services, and the strengthening of civic amenities.',
                    'श्री विनोद अग्रवाल नगर निगम मथुरा-वृन्दावन के निर्वाचित महापौर हैं। उनके नेतृत्व में नगर निगम स्वच्छता, आधारभूत संरचना, धार्मिक एवं पर्यटन नगरी के विकास, डिजिटल सेवाओं के विस्तार तथा नागरिक सुविधाओं के सुदृढ़ीकरण के लिए निरंतर कार्य कर रहा है।'
                  )}
                </p>
              </div>
            </div>

            <div className={styles.visionBlock}>
              "{t(
                'A clean, beautiful, developed, and modern Mathura-Vrindavan.',
                'स्वच्छ, सुंदर, विकसित एवं आधुनिक मथुरा-वृन्दावन।'
              )}"
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
