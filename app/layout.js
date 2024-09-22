import './globals.css'
import Header from './components/Header'
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Sour Gecko',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics></Analytics>
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}