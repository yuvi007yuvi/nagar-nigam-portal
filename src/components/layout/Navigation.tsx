'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { navigationItems } from '@/data/navigation';
import styles from './Navigation.module.css';

interface NavigationProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export default function Navigation({ mobileOpen, onMobileClose }: NavigationProps) {
  const { language, t } = useLanguage();
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const getLabel = (item: { labelEn: string; labelHi: string }) =>
    language === 'en' ? item.labelEn : item.labelHi;

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={styles.nav} role="navigation" aria-label={t('Main Navigation', 'मुख्य नेविगेशन')}>
        <div className={styles.navInner}>
          <ul className={styles.navList}>
            {navigationItems.map((item) => (
              <li key={item.labelEn} className={styles.navItem}>
                {item.children ? (
                  <>
                    <button className={styles.navLink} aria-expanded="false" aria-haspopup="true">
                      {getLabel(item)}
                      <span className={styles.dropdownArrow} aria-hidden="true">▼</span>
                    </button>
                    <div className={styles.megaMenu} role="menu">
                      {item.children.map((child, idx) => (
                        <div key={child.labelEn}>
                          <Link href={child.href} className={styles.megaMenuLink} role="menuitem">
                            {getLabel(child)}
                          </Link>
                          {idx < item.children!.length - 1 && <div className={styles.megaMenuDivider} />}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className={styles.navLink}>
                    {getLabel(item)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* Right Actions */}
          <div className={styles.navActions}>
            <div className={styles.searchWrapper}>
              <input
                type="search"
                className={styles.searchInput}
                placeholder={t('Search...', 'खोजें...')}
                aria-label={t('Search the portal', 'पोर्टल में खोजें')}
              />
              <button className={styles.searchBtn} aria-label={t('Search', 'खोजें')}>
                🔍
              </button>
            </div>
            
            <div className={styles.emergencyNumbers}>
              <span>📞</span>
              <a href="tel:1533">1533</a>
            </div>

            <Link href="/login" className={styles.loginBtn}>
              👤 {t('Login', 'लॉगिन')}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayVisible : ''}`}
        onClick={onMobileClose}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t('Navigation Menu', 'नेविगेशन मेनू')}
      >
        <div className={styles.mobileDrawerHeader}>
          <span className={styles.mobileDrawerTitle}>
            {t('Menu', 'मेनू')}
          </span>
          <button
            className={styles.mobileCloseBtn}
            onClick={onMobileClose}
            aria-label={t('Close menu', 'मेनू बंद करें')}
          >
            ✕
          </button>
        </div>

        <ul className={styles.mobileNavList}>
          {navigationItems.map((item) => (
            <li key={item.labelEn} className={styles.mobileNavItem}>
              {item.children ? (
                <>
                  <button
                    className={styles.mobileNavLink}
                    onClick={() => toggleMobileSubmenu(item.labelEn)}
                    aria-expanded={expandedMobile === item.labelEn}
                  >
                    {getLabel(item)}
                    <span>{expandedMobile === item.labelEn ? '−' : '+'}</span>
                  </button>
                  {expandedMobile === item.labelEn && (
                    <ul className={styles.mobileSubMenu}>
                      {item.children.map((child) => (
                        <li key={child.labelEn}>
                          <Link
                            href={child.href}
                            className={styles.mobileSubLink}
                            onClick={onMobileClose}
                          >
                            {getLabel(child)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={onMobileClose}
                >
                  {getLabel(item)}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.mobileDrawerFooter}>
          <div className={styles.mobileLoginBtns}>
            <Link href="/login" className={styles.mobileLoginBtn} onClick={onMobileClose}>
              👤 {t('Citizen Login', 'नागरिक लॉगिन')}
            </Link>
            <Link href="/login?role=officer" className={`${styles.mobileLoginBtn} ${styles.mobileLoginBtnFilled}`} onClick={onMobileClose}>
              🏢 {t('Officer Login', 'अधिकारी लॉगिन')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
