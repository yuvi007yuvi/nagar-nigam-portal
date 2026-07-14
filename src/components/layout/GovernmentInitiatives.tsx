'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './GovernmentInitiatives.module.css';

const initiatives = [
  { name: 'Government of India', url: 'https://www.india.gov.in', logo: '/images/logos/gov-india.svg' },
  { name: 'Government of Uttar Pradesh', url: 'https://up.gov.in', logo: '/images/logos/up-gov.svg' },
  { name: 'Digital India', url: 'https://www.digitalindia.gov.in', logo: '/images/logos/digital-india.svg' },
  { name: 'Swachh Bharat Mission', url: 'https://swachhbharatmission.ddws.gov.in', logo: '/images/logos/swachh-bharat.svg' },
  { name: 'MyGov', url: 'https://www.mygov.in', logo: '/images/logos/mygov.svg' },
  { name: 'Smart Cities Mission', url: 'https://smartcities.gov.in', logo: '/images/logos/smart-city.svg' },
  { name: 'AMRUT', url: 'https://amrut.gov.in', logo: '/images/logos/amrut.svg' },
];

export default function GovernmentInitiatives() {
  return (
    <section className={styles.initiativesSection}>
      <div className={styles.container}>
        <h3 className={styles.srOnly}>Government Initiatives</h3>
        <div className={styles.logoGrid}>
          {initiatives.map((item, idx) => (
            <Link key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className={styles.logoLink} title={item.name}>
              {/* Fallback to text if image fails or is missing, but Next/Image requires src to exist or it throws, 
                  so we'll use a regular img tag with a fallback or just assume the user will place them.
                  Using regular img is safer for placeholders until files are downloaded. */}
              <img 
                src={item.logo} 
                alt={item.name} 
                className={styles.logoImage} 
              />
              <span className={styles.logoText} hidden>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
