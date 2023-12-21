import { Inter } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'paperPress',
  description: 'paperPress',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader />
        
        {children}
        </body>
    </html>
  )
}
