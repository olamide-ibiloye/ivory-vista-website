import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import DataProvider from "@/providers/DataProvider";

const inter = Inter({ subsets: ["latin"] });

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ivory Vista Properties",
  description: "Welcome to the official Ivory Vista Properties website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DataProvider>
            <main>
              <Navbar />
              {children}
              <Footer />
            </main>
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
