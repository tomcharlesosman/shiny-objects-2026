import type { Metadata } from "next";
import { Playfair_Display, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Shiny Object Social Club — The AI Discovery Community",
  description: "A paid community since 2021. 500+ curious minds discovering the next big thing in AI before everyone else.",
  openGraph: {
    title: "Shiny Object Social Club",
    description: "See the next big thing in AI before everyone else.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceCode.variable} light`}>
      <body className="font-serif antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
