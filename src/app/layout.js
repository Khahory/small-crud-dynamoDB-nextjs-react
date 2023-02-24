import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
    title: 'Welcome',
    description: 'Generated by create next app',
}

export default function RootLayout({children}) {
    return (
        <html lang="es">
        <body>{children}</body>
        </html>
    )
}
