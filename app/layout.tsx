import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme/theme-provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home | Open Blog",
  description:
    "The Open Blog is a open source template is design and built with Next.js 15, Shadcn UI and tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <div className="absolute -inset-20 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px] sm:-inset-40"></div>
          <div className="absolute -inset-20 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
          <div className="absolute -inset-20 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 sm:-inset-40 dark:from-gray-950 dark:via-transparent dark:to-gray-950"></div>
          <div className="tls-shadow-md rounded-card relative overflow-hidden shadow-gray-950/[0.03]">
            <img
              className="relative dark:hidden"
              src="/blocks/traf.png"
              alt=""
            />
            <img
              className="relative hidden grayscale dark:block"
              src="/blocks/traf-dark.png"
              alt=""
            />
          </div> */}

          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
