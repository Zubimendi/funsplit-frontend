import React from 'react'
import Image from 'next/image'
import styles from './logo.module.css'
const Logo = () => {
  return (
    <div>
    <Image
      className={styles.image}
      src={"/logo_v1.png"}
      width={50}
      height={50}
      alt="App Logo"
    />
  </div>
  )
}

export default Logo