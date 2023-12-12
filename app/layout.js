import "./globals.css";
import { Victor_Mono, Roboto_Flex } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const victor_mono = Victor_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Adam Kwiasowski Portfolio",
  description: "Portfolio done using create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={victor_mono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
