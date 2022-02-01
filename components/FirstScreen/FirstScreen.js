import styles from "./FirstScreen.module.sass";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { animations } from "../../styles/animations";

export default function FirstScreen() {
  return (
    <section className={styles.firstScreen} id="main">
      <div className={styles.firstScreen_wrapper_block}>
        <div className={styles.firstScreen_block}>
          <motion.div
            // className={`my-4 bg-belplit24`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animations.line.variants}
            transition={animations.line.transition}
            className={`${styles.firstScreen_line} ${styles.fadeInLeft}`}
          ></motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition}
            className={styles.firstScreen_title}
          >
            Утеплитель
            <span className={styles.firstScreen_span}> Ursa</span>
            <br></br> Высокое качество по доступной цене от
            <span className={styles.firstScreen_span}> 836 руб/шт</span>
          </motion.h1>
          <motion.p
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition}
            p
            className={styles.firstScreen_subtitle}
          >
            Минеральный утеплитель URSA – материал, обладающий высокой
            стойкостью к значительным нагрузкам. В качестве основного компонента
            используется стекловолокно. В составе утеплителя используются
            гидрофобизирующие добавки, обладающие водоотталкивающими качествами.
          </motion.p>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={300}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={300}
          >
            <button className={styles.firstScreen_button}>
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </Link>
        </div>
      </div>

      {/* <div className={styles.over}></div> */}
      <div className={styles.firstScreen_wrapper}></div>
    </section>
  );
}
