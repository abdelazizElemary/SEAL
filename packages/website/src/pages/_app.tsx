import { Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
      <Component {...pageProps} />
    </Worker>
  )
}

export default MyApp
