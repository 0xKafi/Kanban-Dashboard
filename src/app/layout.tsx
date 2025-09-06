import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanban",
  description: "Kanban Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="border-b border-base-300 sticky z-50 top-0">
              <Header></Header>
            </header>
            <main className="flex-1 max-w-screen-xl mx-auto px-4">
              {children}
            </main>
            <footer>
              
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
