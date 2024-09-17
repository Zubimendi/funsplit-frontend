import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css'; // Import your CSS module for styling
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
           <Logo/>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/about">
            About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
          <Link href="/privacy">
            Privacy Policy
          </Link>
        </div>
        <div className={styles.footerSocial}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook-icon.jpg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter-icon.jpg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram-icon.jpg" alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Funshare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
