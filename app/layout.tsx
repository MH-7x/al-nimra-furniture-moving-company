import "./globals.css";
import HeaderWrapper from "@/components/utils/HeaderWrapper";
import Footer from "@/components/utils/Footer";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { MainSchema } from "@/lib/data";
import GTM from "@/components/GTM";

const tajLoc = localFont({
  src: [
    {
      path: "./fonts/Tajawal-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Tajawal-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/Tajawal-Bold.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  applicationName: "شركة النمره نقل اثاث",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-AE" dir="rtl" className={`${tajLoc.className} antialiased`}>
      <head>
        <script
          id="company-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(MainSchema),
          }}
        />
      </head>
      <GTM />
      <body
        className="relative"
        style={{ fontFamily: "var(--font-tajawal), Tahoma, Arial, sans-serif" }}
      >
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
        <Toaster />
      </body>
    </html>
  );
}
