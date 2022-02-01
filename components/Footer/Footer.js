import styles from './Footer.module.sass'
export default function Footer(){
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        <div className={styles.logo_link}>
          <a href={'/'} >
            <img
              src='/images/logo.png'
              alt='Логотип ЦСК'
              className={styles.logo}
            />
          </a>
        </div>
        {/* <div className={styles.socials}>
          <div className={styles.social}>
            <a href={'https://vk.com/td_csk'} >
              <img className={styles.social_img} src="/images/social/iconmonstr-vk-1.svg" />
            </a>
          </div>
          <div className={styles.social}>
            <a href={'https://www.facebook.com/tdcsk.ru/'} >
              <img className={styles.social_img} src="/images/social/iconmonstr-facebook-1.svg" /> 
            </a>
          </div>
          <div className={styles.social}>
            <a href={'https://www.instagram.com/td_csk/'} >
              <img className={styles.social_img} src="/images/social/iconmonstr-instagram-13.svg" /> 
            </a>
            
          </div>
          <div className={styles.social}>
            <a href={'https://vk.com/td_csk'} >
              <img className={styles.social_img} src="/images/social/brand_odnoklassniki_icon_157854.svg" /> 
            </a>
            
          </div>
        </div> */}
        <div className={styles.roboweb}>
          <img src='/images/roboweb-lite.png'/>
          <p>2021. Сайт сделан с помощью <a className={styles.roboweb_link} href={'https://roboweb.team'}>RoboWeb</a></p>
        </div>
      </footer>
    </div>
  )

}