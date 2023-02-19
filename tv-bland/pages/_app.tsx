import Footer from '@/components/Footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return <div className="w-full min-h-screen bg-blue flex flex-col justify-between flex-wrap content-center">
    <Head>
        <title>TV-Bland</title>
      </Head>
    <Component {...pageProps} />
    <Footer/>
  </div>
}
