import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"; // 1. Κάνε το import
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const garamond = EB_Garamond({ 
  subsets: ["latin", "greek"], 
  variable: "--font-garamond" 
});

export const metadata: Metadata = {
  title: "Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου | sarakatsanoi.org",
  description: "Η επίσημη ιστοσελίδα της Αδελφότητας των εν Αθήναις Σαρακατσαναίων Ηπείρου. 49 χρόνια πολιτιστικής προσφοράς, παράδοσης και ιστορίας.",
  keywords: ["Σαρακατσάνοι", "Ήπειρος", "Αθήνα", "Αδελφότητα", "Χαιρετήματα", "Χατζημιχαλη", " Αγγελική Χατζημιχάλη", "Πολιτισμός", "Παράδοση", "Sarakatsanos", "sarakatsanoi", "Sarakatsanaioi", "Adelfotita", "paradosi", "Σαρακατσάνος", "Σαρακατσαναίοι"],
  verification: {
    google: "o0Iic7R6NTsZT356ltszbMZYCZa1mvyiKvHrHXq0M_c", 
  },
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου",
    description: "49 Χρόνια Πολιτιστικής Προσφοράς",
    url: "https://sarakatsanoi.org",
    siteName: "Αδελφότητα Σαρακατσαναίων",
    images: [
      {
        url: 'https://sarakatsanoi.org/logo.png', // Βεβαιώσου ότι το link οδηγεί στο logo σου
        width: 800,
        height: 600,
      },
    ],
    locale: "el_GR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={`${garamond.variable} ${inter.variable} font-serif w-full`}>
       <Navigation /> 
        {/* pt-24 για κινητά | md:pt-48 για υπολογιστή (άλλαξε το 48 σε ό,τι σε βολεύει) */}
        <main className="w-full pt-15 md:pt-5">
          {children}
        </main>
        <Footer /> {/* 2. Βάλτο εδώ, μετά το main */}
        <Analytics /> {/* <--- Αυτή είναι η μαγική γραμμή! */}
      </body>
    </html>
  );
}