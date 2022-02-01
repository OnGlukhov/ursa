import styles from "./OrderCall.module.sass";
import { Link } from "react-scroll";

export default function OrderCall() {
  return (
    <section className={styles.orderCall}>
      <div className={styles.orderCall_wrapper}>
        <div className={styles.orderCall_block}>
          <h3 className={styles.orderCall_title}>
            Купить минеральный утеплитель — <span>не проблема</span>. Звоните нам!
          </h3>
          <p className={styles.orderCall_subtitle}>
            Доставка по Москве и Московской области
          </p>
        </div>
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
          <button className={styles.orderCall_button}>ЗАКАЗАТЬ ЗВОНОК</button>
        </Link>
      </div>
    </section>
  );
}
