import '../public/styles/global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Metadata -> important for SEO
export const metadata = {
  title: 'Pensil App',
  // Change this description (and title if neccessary) and then delete this comment 
  description: 'Discover endless inspiration and connect with like-minded artists',
  keywords: 'Art, Digitial Art',
}

// Nothing to change here, default settings.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
