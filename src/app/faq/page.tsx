'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { faqs } from '@/data/faq';
import styles from '../shared.module.css';

export default function FAQPage() {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageBanner}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t('Home', 'होम')}</Link>
            <span>/</span>
            <span>{t('FAQ', 'अक्सर पूछे जाने वाले प्रश्न')}</span>
          </nav>
          <h1 className={styles.pageTitle}>{t('Frequently Asked Questions', 'अक्सर पूछे जाने वाले प्रश्न')}</h1>
          <p className={styles.pageDesc}>
            {t(
              'Find answers to common questions about municipal services, tax payments, and more.',
              'नगरपालिका सेवाओं, कर भुगतान और बहुत कुछ के बारे में सामान्य प्रश्नों के उत्तर प्राप्त करें।'
            )}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.accordion}>
            {faqs.map((faq) => (
              <div key={faq.id} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionBtn} ${openId === faq.id ? styles.accordionBtnActive : ''}`}
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <span>{language === 'en' ? faq.questionEn : faq.questionHi}</span>
                  <span className={`${styles.accordionArrow} ${openId === faq.id ? styles.accordionArrowOpen : ''}`}>
                    ▼
                  </span>
                </button>
                {openId === faq.id && (
                  <div className={styles.accordionContent}>
                    {language === 'en' ? faq.answerEn : faq.answerHi}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
