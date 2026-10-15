import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {title: 'Darren’s Kitchen · Good food, worth repeating', description: 'Your international recipe rotation and living kitchen notebook.', robots: {index: false, follow: false}, manifest:'/manifest.webmanifest', appleWebApp:{capable:true,title:'Kitchen',statusBarStyle:'default'}, icons: {icon:'/favicon.svg',apple:'/apple-touch-icon.png'}};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#2e5540'};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>;}
