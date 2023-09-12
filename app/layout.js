import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Adam Kwiasowski Portfolio",
  description: "Portfolio done using create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
