import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="w-full min-h-screen bg-blue flex flex-col justify-between">
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}
