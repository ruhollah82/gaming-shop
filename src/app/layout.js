import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "@/components/TopBar";

export const metadata = {
  title: "Gaming Shop Demo",
  description: "A small gaming store demo built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-500 text-gray-100">
        <>
          <TopBar />
          <Navbar />
        </>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
