import styles from './Header.module.sass'
import Navigation from '../Navigation/Navigation'
import Burger from '../Burger/Burger'

export default function Header({width}) {

	return (
		<header className={styles.header}>
			<div className={styles.header_wrapper}>
				<a href={'/'}>
					<img
					src='/images/logo.png'
					alt='Логотип ЦСК'
					className={styles.header_logo}
					
					/>
				</a>

				{ width > 990? <Navigation /> : <Burger />}
			</div>

		</header>
	)
}
