import type { Metadata } from "next";
import {Plus_Jakarta_Sans } from "next/font/google";
import {cn} from '@/lib/utils';

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700' ], 
  variable:'--font-sans'
});


export const metadata: Metadata = {
  title: "PulsePro",
  description: "A Healthcare Managment System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
