import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Title for child segments",
    template: "%s | Next.js 14 tutorial",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="flex flex-col h-full"
      lang="en"
    >
      <body className={`flex flex-col h-full ${inter.className}`}>
        <header>
          <h1 className="text-2xl">Header</h1>
        </header>
        <main className="flex flex-1 items-center justify-center">
          {children}
        </main>
        <footer>
          <h1 className="text-2xl">Footer</h1>
        </footer>
      </body>
    </html>
  );
}
