import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Provider } from "./providers";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Wallet",
  description: "User Wallet"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
      <body className={geist.className}>{children}</body>
      </Provider>
    </html>
  );
}
