import '../styles/globals.css'
import '../styles/fonts.css'
import Preloader from '../components/Preloader/Preloader'
import React from 'react'


function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = React.useState(true);
	React.useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 1000);
	}, []);

	return (
		<>
			{
				// Если загружается то показываем прелоадер
				loading && <Preloader />
			}
			{!loading && (
				<Component {...pageProps} />
			)}
		</>

	)
}

export default MyApp
