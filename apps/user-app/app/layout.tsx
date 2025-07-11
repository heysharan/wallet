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
      <body className={`${geist.className} bg-black min-h-screen text-white`}>
        <Provider>
          <div className="max-w-screen-xl mx-auto px-4">
            {children}
            <Toaster />
          </div>
        </Provider>
      </body>
    </html>
  );
}
