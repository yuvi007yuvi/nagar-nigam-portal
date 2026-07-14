'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { projects } from '@/data/projects';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const { language, t } = useLanguage();
  const displayProjects = projects.slice(0, 4);

  const statusLabels = {
    'completed': { en: 'Completed', hi: 'पूर्ण', color: 'var(--color-success)' },
    'in-progress': { en: 'In Progress', hi: 'प्रगति पर', color: 'var(--color-orange)' },
    'planned': { en: 'Planned', hi: 'नियोजित', color: 'var(--color-info)' },
  };

  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2 id="projects-heading" className={styles.title}>
            {t('Development Projects', 'विकास परियोजनाएं')}
          </h2>
          <div className={styles.titleBar} aria-hidden="true" />
          <p className={styles.subtitle}>
            {t('Smart City & Infrastructure Projects', 'स्मार्ट सिटी एवं बुनियादी ढांचा परियोजनाएं')}
          </p>
        </div>

        <div className={styles.grid}>
          {displayProjects.map((project) => {
            const status = statusLabels[project.status];
            return (
              <div key={project.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.cardCategory}>{project.category}</span>
                  <span className={styles.cardStatus} style={{ color: status.color }}>
                    ● {language === 'en' ? status.en : status.hi}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  {language === 'en' ? project.titleEn : project.titleHi}
                </h3>
                <p className={styles.cardDesc}>
                  {language === 'en' ? project.descriptionEn : project.descriptionHi}
                </p>
                <div className={styles.progressWrapper}>
                  <div className={styles.progressHeader}>
                    <span className={styles.progressLabel}>{t('Progress', 'प्रगति')}</span>
                    <span className={styles.progressValue}>{project.progress}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${project.progress}%`, background: status.color as string }}
                    />
                  </div>
                </div>
                <div className={styles.cardMeta}>
                  <span>💰 {project.budget}</span>
                  <span>📅 {project.startDate.slice(0, 4)}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.viewAll}>
          <Link href="/projects" className={styles.viewAllBtn}>
            {t('View All Projects', 'सभी परियोजनाएं देखें')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
