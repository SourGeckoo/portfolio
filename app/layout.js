import './globals.css'
import Header from './components/Header'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Sour Gecko',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics></Analytics>
      <SpeedInsights></SpeedInsights>
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}