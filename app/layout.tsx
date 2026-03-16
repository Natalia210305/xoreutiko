import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"; // 1. Κάνε το import

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const garamond = EB_Garamond({ 
  subsets: ["latin", "greek"], 
  variable: "--font-garamond" 
});

export const metadata: Metadata = {
  title: "Αδελφότητα των εν Αθήναις Σαρακατσαναίων Ηπείρου",
  description: "49 Χρόνια Πολιτιστικής Προσφοράς",
  icons: {
    icon: "/favicon.ico", 
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
      </body>
    </html>
  );
}