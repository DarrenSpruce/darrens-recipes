import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title: 'Darren’s Kitchen · Good food, worth repeating', description: 'Your international recipe rotation and living kitchen notebook.', robots: {index: false, follow: false}, icons: {icon:'/favicon.svg',apple:'/apple-touch-icon.png'}};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>;}
