
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.parallaxBg} />
      <div className={styles.overlay} aria-hidden="true" />
      
      <div className={styles.heroContent}>
        <div className={styles.glassCard}>


          <h1 id="hero-heading" className={styles.heroTitle}>
            Mathura Vrindavan <br />
            <span style={{ color: 'var(--color-orange)' }}>Smart City</span>
          </h1>
          <h2 className={styles.heroTitleHi}>मथुरा-वृंदावन नगर निगम</h2>
          
          <p className={styles.heroSubtitle}>
            Committed to providing transparent, efficient, and accessible municipal services to the citizens of Mathura and Vrindavan.
          </p>



        </div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.heroPattern} aria-hidden="true" />
      <div className={styles.heroPattern2} aria-hidden="true" />
    </section>
  );
}
