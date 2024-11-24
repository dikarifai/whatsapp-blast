import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

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
  title: "Whatsapp Blast",
  description: "Whatsapp Blast",
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
        <DashboardLayout>
          <div className="w-full flex flex-col px-5 gap-10">{children}</div>
        </DashboardLayout>
      </body>
    </html>
  );
}
