"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import styles from './page.module.css';
import { googleSignIn } from '@/lib/actions/auth.actions';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1 className={styles.heading}>Welcome to Fun<span style={{color: '#00303F'}}>Share!</span></h1>
        <p className={styles.subheading}>
          Easily manage your expenses and split costs with friends and family.
          Simplify your financial tracking and keep your budget in check.
        </p>
        <div className={styles.ctas}>
          <Button onClick={ async () => await googleSignIn()} className={styles.primaryButton}>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
