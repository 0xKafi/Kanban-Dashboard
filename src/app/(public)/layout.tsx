
import Header from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
