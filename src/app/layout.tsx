import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/lib/ThemeContext';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Roderick Daniels | Personal Website',
  description: 'Personal website of Roderick Daniels - Financial Management Analyst and Defense Financial Operations Expert, specializing in strategic financial operations and resource management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
} 