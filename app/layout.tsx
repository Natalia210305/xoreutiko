import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation"; // Η ΔΙΟΡΘΩΣΗ ΕΙΝΑΙ ΕΔΩ

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const garamond = EB_Garamond({ 
  subsets: ["latin", "greek"], 
  variable: "--font-garamond" 
});

export const metadata: Metadata = {
  title: "Αδελφότης Σαρακατσαναίων Ηπείρου",
  description: "48 Χρόνια Πολιτιστικής Προσφοράς",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={`${garamond.variable} ${inter.variable} font-serif`}>
        <Navigation /> 
        {children}
      </body>
    </html>
  );
}