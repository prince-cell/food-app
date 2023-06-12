import Layout from '@/components/Layout'
import '@/styles/globals.css'
import "../styles/Featured.css";
import {Baskervville} from 'next/font/google'
const baskerville = Baskervville({
  subsets: ['latin'],
  weight: '400',
  variable: '--oxygen-font'
})

export default function App({ Component, pageProps }) {
  return (
    <Layout className={baskerville.className}>
      <Component {...pageProps}  />
    </Layout>
  );
}
