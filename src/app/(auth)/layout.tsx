import React from 'react';
import styles from './authlayout.module.css';
import Image from 'next/image';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.formContainer}>
        {children}
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src='/businessman-with-stacks-of-money-cash-getty.jpg' 
            alt="Auth Image" 
            layout='fill' 
            className={styles.authImage} 
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
