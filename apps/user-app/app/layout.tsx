import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Provider } from "./providers";
import { Toaster } from 'sonner'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet",
  description: "Wallet"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${geist.className} bg-black min-h-screen text-white`}>
          <div className="max-w-screen-xl mx-auto px-4">
            {children}
            <Toaster />
          </div>
        </body>
      </Provider>
    </html>
  );
}