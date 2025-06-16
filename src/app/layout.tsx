import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import Navbar from "@/components/main/Navbar";

const lato = Lato({
  weight: "400",
  variable: "--lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal-Kumar",
  description: "Portfolio template build with next.js",
  authors: [
    { name: "Vishal Kumar", url: "https://github.com/vishalkumar12323" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.variable} ${lato.className} antialiased text-black dark:text-white flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
