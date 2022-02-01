import React from 'react'
import styles from './Preloader.module.sass'

export default function Preloader() {
    return (
      <div className={styles.preloader}>
        <div className={styles.preloader_logo}>
          <img src='images/logo-big.png' width='60%' srcSet='images/logo-big.png 2x' />
        </div>
        <div className={styles.preloader_body}>
          <div id={styles.loadingProgressG}>
            <div
              className={styles.loadingProgressG}
              id='loadingProgressG_1'
            ></div>
          </div>
        </div>
      </div>
    )
}
