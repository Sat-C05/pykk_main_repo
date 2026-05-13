'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/types';
import Button from '@/components/shared/Button';
import styles from './Navbar.module.css';

interface NavbarProps {
  companyName: string;
  primaryNav: NavLink[];
  whatsappNumber: string;
}

const Navbar: React.FC<NavbarProps> = ({ companyName, primaryNav, whatsappNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const transparentClass = !scrolled && !isOpen ? styles.transparent : '';

  return (
    <nav className={`${styles.navbar} ${transparentClass}`}>
      {/* Ultra-Modern Minimal Nav */}
      <div className={styles.mainNav}>
        <div className={styles.container}>
          
          {/* Left: Brand */}
          <div className={styles.leftSlot}>
            <Link href="/" className={styles.brand}>
              <img 
                src="/images/logo.jpeg" 
                alt="PYKK Logo" 
                className={styles.brandLogo} 
              />
              <span>{companyName}</span>
            </Link>
          </div>

          {/* Center: Absolute Aligned Navigation */}
          <div className={styles.centerSlot}>
            <div className={styles.desktopMenu}>
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className={styles.rightSlot}>
            <div className={styles.desktopActions}>
              <Button 
                label="Get a Quote" 
                href="/contact" 
                variant={!scrolled && !isOpen ? 'ghost' : 'primary'} 
              />
            </div>
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
              <span className={`${styles.bar} ${isOpen ? styles.bar1 : ''}`}></span>
              <span className={`${styles.bar} ${isOpen ? styles.bar2 : ''}`}></span>
              <span className={`${styles.bar} ${isOpen ? styles.bar3 : ''}`}></span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${styles.mobileDropdown} ${isOpen ? styles.open : ''}`}>
        {primaryNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className={styles.mobileCta}>
          <Button label="Get a Quote" href="/contact" variant="primary" fullWidth onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
