import '../app/globals.css'

export const metadata = {
  title: 'Auto Vault',
  description: 'Your personal vault for vehicles – track every ride, refuel, and repair.',
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