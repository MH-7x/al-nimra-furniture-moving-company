import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/utils/HeaderWrapper";
import Footer from "@/components/utils/Footer";
import localFont from "next/font/local";

const tajLoc = localFont({
  src: [
    {
      path: "./fonts/Tajawal-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Tajawal-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Tajawal-Bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "شركة النمره نقل اثاث",
  description:
    "فريقنا يتولى الفك والتغليف والنقل والتركيب بشاحنات مغلقة. السعر يُحدد قبل وصولنا ولا يتغير يوم النقل — ما اتفقنا عليه هو ما تدفعه، بدون مفاجآت.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-AE" dir="rtl" className={`${tajLoc.variable} antialiased`}>
      <body className="relative">
        <div
          className="fixed inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
        radial-gradient(
          circle at top center,
          #fffaf7 0%,
          transparent 70%
        )
      `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
            zIndex: -10,
          }}
        />
        <HeaderWrapper />
        {children}

        <Footer />
      </body>
    </html>
  );
}
