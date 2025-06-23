import '../app/globals.css'

export const metadata = {
  title: 'Vehicle Management',
  description: 'Modern vehicle management dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}