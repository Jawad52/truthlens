import './globals.css'

export const metadata = {
  title: 'TruthLens',
  description: 'TruthLens application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}