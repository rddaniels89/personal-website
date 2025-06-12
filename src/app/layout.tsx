import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/lib/ThemeContext';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Roderick Daniels | Financial Management Leader & Tech Innovator',
    template: '%s | Roderick Daniels'
  },
  description: 'Experienced Financial Management Analyst and Defense Operations Expert specializing in strategic financial planning, technology integration, and process optimization. Navy veteran with expertise in billion-dollar budget management and innovative financial solutions.',
  keywords: [
    'Financial Management',
    'Defense Financial Operations', 
    'Budget Analysis',
    'Strategic Planning',
    'Technology Integration',
    'Navy Veteran',
    'Process Optimization',
    'Resource Management',
    'Financial Strategy',
    'Government Finance'
  ],
  authors: [{ name: 'Roderick Daniels' }],
  creator: 'Roderick Daniels',
  publisher: 'Roderick Daniels',
  metadataBase: new URL('https://roderick-daniels.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roderick-daniels.com',
    siteName: 'Roderick Daniels',
    title: 'Roderick Daniels | Financial Management Leader & Tech Innovator',
    description: 'Experienced Financial Management Analyst and Defense Operations Expert specializing in strategic financial planning, technology integration, and process optimization.',
    images: [
      {
        url: '/images/roderick-profile2.jpg',
        width: 1200,
        height: 630,
        alt: 'Roderick Daniels - Financial Management Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roderick Daniels | Financial Management Leader & Tech Innovator',
    description: 'Experienced Financial Management Analyst and Defense Operations Expert specializing in strategic financial planning and technology integration.',
    images: ['/images/roderick-profile2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roderick Daniels",
    "url": "https://roderick-daniels.com",
    "sameAs": [
      "https://www.linkedin.com/in/roderick-daniels/",
      "https://github.com/rddaniels89"
    ],
    "jobTitle": "Financial Management Analyst",
    "worksFor": {
      "@type": "Organization",
      "name": "Defense Health Agency"
    },
    "description": "Experienced Financial Management Leader specializing in strategic financial planning, technology integration, and process optimization. Navy veteran with expertise in billion-dollar budget management.",
    "knowsAbout": [
      "Financial Management",
      "Budget Analysis", 
      "Strategic Planning",
      "Defense Operations",
      "Technology Integration",
      "Process Optimization"
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Western Governors University",
        "description": "Master of Business Administration (MBA)"
      },
      {
        "@type": "Organization", 
        "name": "California State University, Fullerton",
        "description": "Bachelor of Arts in Finance"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} font-body antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-16 overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
} 