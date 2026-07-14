'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './GallerySlider.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    src: '/images/slider-2.png',
    titleEn: 'Evening Aarti at Yamuna Ghat',
    titleHi: 'यमुना घाट पर सांध्य आरती',
    descEn: 'A beautiful scenic view of the Yamuna River ghats in Mathura.',
    descHi: 'मथुरा में यमुना नदी घाटों का एक सुंदर दृश्य।'
  },
  {
    id: 2,
    src: '/images/Krishna-JanamBhumi.JPG',
    titleEn: 'Shri Krishna Janmasthan',
    titleHi: 'श्री कृष्ण जन्मस्थान',
    descEn: 'The sacred birthplace of Lord Krishna in Mathura.',
    descHi: 'मथुरा में भगवान श्री कृष्ण का पवित्र जन्मस्थान।'
  },
  {
    id: 3,
    src: '/images/Keshi-Ghat-Vrindavan-resized.JPG',
    titleEn: 'Keshi Ghat Vrindavan',
    titleHi: 'केशी घाट वृन्दावन',
    descEn: 'The majestic architecture along the banks of River Yamuna.',
    descHi: 'यमुना नदी के किनारे शानदार वास्तुकला।'
  },
  {
    id: 4,
    src: '/images/indian-temple-4782304_1280.jpg',
    titleEn: 'Historic Temples',
    titleHi: 'ऐतिहासिक मंदिर',
    descEn: 'Exploring the rich spiritual heritage of Mathura-Vrindavan.',
    descHi: 'मथुरा-वृन्दावन की समृद्ध आध्यात्मिक विरासत की खोज।'
  },
  {
    id: 5,
    src: '/images/slider-1.png',
    titleEn: 'Smart City Initiative',
    titleHi: 'स्मार्ट सिटी पहल',
    descEn: 'Developing world-class infrastructure for our citizens.',
    descHi: 'हमारे नागरिकों के लिए विश्व स्तरीय बुनियादी ढांचे का विकास।'
  }
];

export default function GallerySlider() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className={styles.section} aria-labelledby="gallery-heading">
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2 id="gallery-heading" className={styles.title}>
            {t('Photo Gallery', 'फोटो गैलरी')}
          </h2>
          <div className={styles.controls}>
            <button onClick={prevSlide} className={styles.controlBtn} aria-label="Previous image">
              <FaChevronLeft size={14} />
            </button>
            <button onClick={nextSlide} className={styles.controlBtn} aria-label="Next image">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <div 
          className={styles.sliderTrack} 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {galleryImages.map((img, index) => (
            <div key={img.id} className={styles.slide}>
              <Image
                src={img.src}
                alt={language === 'hi' ? img.titleHi : img.titleEn}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.caption}>
                <h3 className={styles.captionTitle}>
                  {language === 'hi' ? img.titleHi : img.titleEn}
                </h3>
                <p className={styles.captionDesc}>
                  {language === 'hi' ? img.descHi : img.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.indicators}>
        {galleryImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
