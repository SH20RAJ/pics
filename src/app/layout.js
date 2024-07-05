import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pics Shade",
  description: "Welcome to Pics Shade, the ultimate image hosting solution for your website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


// export const runtime = 'experimental-edge'
