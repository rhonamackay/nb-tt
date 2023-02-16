import Footer from '@/components/footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="w-screen h-screen bg-black">
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}
