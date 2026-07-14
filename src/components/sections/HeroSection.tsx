'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const images = [
  '/images/Krishna-JanamBhumi.JPG',
  '/images/Keshi-Ghat-Vrindavan-resized.JPG',
  '/images/indian-temple-4782304_1280.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.sliderContainer}>
        {images.map((src, index) => (
          <div
            key={src}
            className={`${styles.heroBg} ${
              index === currentIndex ? styles.active : styles.inactive
            }`}
          >
            <Image
              src={src}
              alt={`Mathura Vrindavan Smart City ${index + 1}`}
              fill
              priority={index === 0}
              style={{ objectFit: 'cover', objectPosition: 'center center' }}
            />
          </div>
        ))}
      </div>
      
      <div className={styles.overlay} aria-hidden="true" />

      {/* Decorative Elements */}
      <div className={styles.heroPattern} aria-hidden="true" />
      <div className={styles.heroPattern2} aria-hidden="true" />


    </section>
  );
}
