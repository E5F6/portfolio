import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Priyanshu Chahar",
  description: "Welcome to the Portfolio of Priyanshu Chahar, a talented full-stack developer specializing in HTML, CSS, JavaScript, React JS, Next JS, and Tailwind CSS. Explore Priyanshu's projects and skills.",
  keywords: "Priyannxhuu, Priyanshu Chahar, Full Stack Developer, HTML, CSS, JavaScript, React JS, Next JS, Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
