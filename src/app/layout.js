import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Remote Talent Hub",
  description: "Best place to find your dream job!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
