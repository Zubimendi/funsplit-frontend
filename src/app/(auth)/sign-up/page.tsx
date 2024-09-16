import React from 'react';
import AuthForm from '@/components/AuthForm/AuthForm';
import styles from './signup.module.css'; // Importing the styles for this page

const SignUp = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.authFormWrapper}>
        <AuthForm type="sign-up" />
      </div>
    </div>
  );
};

export default SignUp;
