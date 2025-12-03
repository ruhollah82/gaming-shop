import "./globals.css";
import Navbar from "@/features/navbar/Navbar";
import Footer from "@/features/footer/Footer";
import { Header } from "@/components/layout";

export const metadata = {
  title: "Gaming Shop Demo",
  description: "A small gaming store demo built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-500 text-gray-100">
        <>
          <Header />
          <Navbar />
        </>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
