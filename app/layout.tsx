import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";

const sans = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-sans' 
});

const display = Bebas_Neue({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-display' 
});

export const metadata: Metadata = {
  title: 'Excel Learners Academy | Peshawar',
  description: 'Peshawar\'s most elite prep for MDCAT, ETEA, and Board Exams. Scholarship Test on April 25th.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("antialiased", sans.variable, display.variable)}>
      <body suppressHydrationWarning className="font-sans">
        {children}
      </body>
    </html>
  );
} 