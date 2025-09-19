import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'دليل لجنة التنظيم والمراسم - اتحاد طلاب تحيا مصر',
  description: 'كل حاجة محتاج تعرفها عن لجنة التنظيم المركزية',
  icons: {
    icon: 'https://www.dropbox.com/scl/fi/3gtq58x7915iaoevz9pvk/icon.png?rlkey=6m3fahu2vkow1ebiyu2q3hi7f&raw=1',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
