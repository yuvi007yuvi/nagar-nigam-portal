'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          {/* About Column */}
          <div className={styles.footerAbout}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoIcon}>
                <Image 
                  src="/images/MathuraLogo.png" 
                  alt="Nagar Nigam Mathura-Vrindavan Logo" 
                  width={72} 
                  height={72} 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <div className={styles.footerOrgName}>
                  {t('Nagar Nigam Mathura-Vrindavan', 'नगर निगम मथुरा-वृन्दावन')}
                </div>
                <div className={styles.footerOrgNameSub}>
                  {t('Government of Uttar Pradesh', 'उत्तर प्रदेश सरकार')}
                </div>
              </div>
            </div>
            <p className={styles.footerDesc}>
              {t(
                'Mathura Vrindavan Municipal Corporation is committed to providing efficient civic services and improving quality of life for all citizens through smart governance and digital transformation.',
                'मथुरा वृन्दावन नगर निगम स्मार्ट शासन और डिजिटल परिवर्तन के माध्यम से सभी नागरिकों के लिए कुशल नागरिक सेवाएं प्रदान करने और जीवन की गुणवत्ता में सुधार करने के लिए प्रतिबद्ध है।'
              )}
            </p>
            <div className={styles.footerContact}>
              <div className={styles.footerContactItem}>
                <span>📍</span>
                <span>{t(
                  'Bhuteshwar Jalkal Compound, Mathura, UP - 281001',
                  'भूतेश्वर जलकल कंपाउंड, मथुरा, उ.प्र. - 281001'
                )}</span>
              </div>
              <div className={styles.footerContactItem}>
                <span>📞</span>
                <a href="tel:05652503632">0565-2503632</a>
              </div>
              <div className={styles.footerContactItem}>
                <span>📧</span>
                <a href="mailto:nagarayuktmathura@gmail.com">nagarayuktmathura@gmail.com</a>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className={styles.socialMedia}>
              <h4 className={styles.socialHeading}>{t('Connect with Us', 'हमसे जुड़ें')}</h4>
              <div className={styles.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.facebook}`} aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.twitter}`} aria-label="X (formerly Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instagram}`} aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.youtube}`} aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3L10 15z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Citizen Services */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>
              {t('Citizen Services', 'नागरिक सेवाएं')}
            </h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/services/property-tax" className={styles.footerLink}>{t('Property Tax', 'संपत्ति कर')}</Link></li>
              <li><Link href="/services/water-tax" className={styles.footerLink}>{t('Water Tax', 'जल कर')}</Link></li>
              <li><Link href="/services/certificates/birth" className={styles.footerLink}>{t('Birth Certificate', 'जन्म प्रमाण पत्र')}</Link></li>
              <li><Link href="/services/certificates/death" className={styles.footerLink}>{t('Death Certificate', 'मृत्यु प्रमाण पत्र')}</Link></li>
              <li><Link href="/services/complaints" className={styles.footerLink}>{t('Register Complaint', 'शिकायत दर्ज करें')}</Link></li>
              <li><Link href="/services/trade-license" className={styles.footerLink}>{t('Trade License', 'व्यापार लाइसेंस')}</Link></li>
              <li><Link href="/services/building-permission" className={styles.footerLink}>{t('Building Permission', 'भवन अनुमति')}</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>
              {t('Important Links', 'महत्वपूर्ण लिंक')}
            </h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/tenders" className={styles.footerLink}>{t('Tenders', 'निविदाएं')}</Link></li>
              <li><Link href="/downloads" className={styles.footerLink}>{t('Downloads', 'डाउनलोड')}</Link></li>
              <li><Link href="/gallery" className={styles.footerLink}>{t('Gallery', 'गैलरी')}</Link></li>
              <li><Link href="/faq" className={styles.footerLink}>{t('FAQ', 'अक्सर पूछे जाने वाले प्रश्न')}</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>{t('Contact Us', 'संपर्क करें')}</Link></li>
              <li><a href="https://india.gov.in" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>{t('National Portal', 'राष्ट्रीय पोर्टल')}</a></li>
              <li><a href="https://up.gov.in" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>{t('UP Government', 'उ.प्र. सरकार')}</a></li>
            </ul>
          </div>

          {/* Contact & Emergency */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>
              {t('Departments', 'विभाग')}
            </h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/departments/health" className={styles.footerLink}>{t('Health', 'स्वास्थ्य')}</Link></li>
              <li><Link href="/departments/engineering" className={styles.footerLink}>{t('Engineering', 'अभियांत्रिकी')}</Link></li>
              <li><Link href="/departments/revenue" className={styles.footerLink}>{t('Revenue', 'राजस्व')}</Link></li>
              <li><Link href="/departments/water-supply" className={styles.footerLink}>{t('Water Supply', 'जल आपूर्ति')}</Link></li>
              <li><Link href="/departments/sanitation" className={styles.footerLink}>{t('Sanitation', 'स्वच्छता')}</Link></li>
            </ul>


          </div>
        </div>
      </div>


      {/* Tricolor Bar */}
      <div className="tricolor-bar" aria-hidden="true" />

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} {t(
              'Nagar Nigam Mathura-Vrindavan. All Rights Reserved.',
              'नगर निगम मथुरा-वृन्दावन। सर्वाधिकार सुरक्षित।'
            )}
          </span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>
              {t('Privacy Policy', 'गोपनीयता नीति')}
            </Link>
            <Link href="/terms" className={styles.bottomLink}>
              {t('Terms of Use', 'उपयोग की शर्तें')}
            </Link>
            <Link href="/sitemap" className={styles.bottomLink}>
              {t('Site Map', 'साइट मैप')}
            </Link>
            <Link href="/accessibility" className={styles.bottomLink}>
              {t('Accessibility', 'अभिगम्यता')}
            </Link>
          </div>
          <div className={styles.visitorCount}>
            👁️ {t('Visitors: 2,45,890', 'आगंतुक: 2,45,890')}
          </div>
        </div>
      </div>
    </footer>
  );
}
