import './globals.css';
import { Navbar, Footer } from "@/components"
import { Metadata } from "next";




export const metadata: Metadata = {
  title: 'Cars Hub',
  description: 'best cars in the world',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
