import Footer from '@/components/Footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="w-full min-h-screen bg-blue ">
    <Component {...pageProps} />
    <Footer/>
  </div>
}
