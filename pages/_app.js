import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  for(let i = 0; i < 100; i++){
    console.log('da')
  }

  return <Component {...pageProps} />
}

export default MyApp
