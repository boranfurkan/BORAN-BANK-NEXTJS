import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import Toastify from "@/app/components/toastify/Toastify";
import Footer from "@/app/components/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Footer/>
        </Providers>
        <Toastify/>
      </body>
    </html>
  )
}
