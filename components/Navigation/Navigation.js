import styles from './Navigation.module.sass'
import { Link } from 'react-scroll'
import { contacts } from '../../data/contacts'
export default function Navigation() {
	return (
		<nav className={styles.nav}>
			<Link activeClass={styles.active}
				className={styles.nav_link}
				to="main"
				spy={true}
				smooth={true}
				hashSpy={true}
				duration={300}
				isDynamic={true}
				ignoreCancelEvents={false}
				spyThrottle={300}
			>
				ГЛАВНАЯ
			</Link>
			<Link activeClass={styles.active}
				className={styles.nav_link}
				to="catalog"
				spy={true}
				smooth={true}
				hashSpy={true}
				duration={300}
				isDynamic={true}
				ignoreCancelEvents={false}
				spyThrottle={300}
			>
				ЦЕНЫ
			</Link>
			<Link activeClass={styles.active}
				className={styles.nav_link}
				to="advantages"
				spy={true}
				smooth={true}
				hashSpy={true}
				duration={300}
				isDynamic={true}
				ignoreCancelEvents={false}
				spyThrottle={300}
			>
				ПРЕИМУЩЕСТВА
			</Link>
			<Link activeClass={styles.active}
				className={styles.nav_link}
				to="examples"
				spy={true}
				smooth={true}
				hashSpy={true}
				duration={300}
				isDynamic={true}
				ignoreCancelEvents={false}
				spyThrottle={300}
			>
				ПРИМЕНЕНИЕ
			</Link>
			<Link activeClass={styles.active}
				className={styles.nav_link}
				to="contacts"
				spy={true}
				smooth={true}
				hashSpy={true}
				duration={300}
				isDynamic={true}
				ignoreCancelEvents={false}
				spyThrottle={300}
			>
				КОНТАКТЫ
			</Link>
			<a
				className={`${styles.nav_link} ${styles.nav_tel}`}
				href={`tel:${contacts.phone}`}
			>
				{contacts.phone}
			</a>
			<a
				href={`https://api.whatsapp.com/send?phone=${contacts.whatsapp}`}
			>
				<img className={styles.whatsapp} src={'/images/social/whatsapp-svgrepo-com.svg'}></img>
			</a>
		</nav>
	)
}
