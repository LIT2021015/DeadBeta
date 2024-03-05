import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/landing/NavBar";
import Footer from "./components/landing/Footer";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dead Beta",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <AuthProvider>
       <Navbar />
        {children}
        <Footer  />
        </AuthProvider> 
      </body>
    </html>
  );
}
