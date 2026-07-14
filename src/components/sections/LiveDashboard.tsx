'use client';

import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { statistics } from '@/data/statistics';
import styles from './LiveDashboard.module.css';

function AnimatedCounter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const formatNumber = (n: number) => {
    if (n >= 100000) return (n / 100000).toFixed(1) + 'L';
    if (n >= 1000) return n.toLocaleString('en-IN');
    return n.toString();
  };

  return (
    <div ref={ref} className={styles.cardValue}>
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
}

export default function LiveDashboard() {
  const { language, t } = useLanguage();

  return (
    <section className={styles.section} aria-labelledby="dashboard-heading">
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2 id="dashboard-heading" className={styles.title}>
            {t('Live Dashboard', 'लाइव डैशबोर्ड')}
          </h2>
          <div className={styles.titleBar} aria-hidden="true" />
          <p className={styles.subtitle}>
            {t('Real-time statistics of municipal services', 'नगरपालिका सेवाओं के रियल-टाइम आंकड़े')}
          </p>
        </div>

        <div className={styles.grid}>
          {statistics.map((stat) => (
            <div key={stat.id} className={styles.card}>
              <div className={styles.cardIcon}>{stat.icon}</div>
              <AnimatedCounter
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <div className={styles.cardLabel}>
                {language === 'en' ? stat.labelEn : stat.labelHi}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
