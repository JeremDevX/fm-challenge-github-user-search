import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.scss";
import ThemeProvider from "@/providers/themeProvider";
import { ThemeContextProvider } from "@/context/themeContext";
import Header from "@/components/header/header";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Front End Mentor | GitHub Search User",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className}`}>
        <ThemeContextProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
