// RootLayout.tsx
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Nav/Navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div>
          <Navigation/>
          <div>
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
