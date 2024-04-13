import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import "./style.css";
import Navbar from "@/components/navbar";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyanshu Chahar",
  description: "Welcome to the Portfolio of Priyanshu Chahar, a talented full-stack developer specializing in HTML, CSS, JavaScript, React JS, Next JS, and Tailwind CSS. Explore Priyanshu's projects and skills.",
  keywords: "Priyannxhuu, Priyanshu Chahar, Full Stack Developer, HTML, CSS, JavaScript, React JS, Next JS, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
