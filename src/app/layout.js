import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Theme from "@/components/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pics Shade",
  description: "Welcome to Pics Shade, the ultimate image hosting solution for your website!",
  image: "/assets/group.svg",
  url: "https://pics.shade.cool",
  type: "website",
  // twitter: "@PicsShade",
  siteName: "Pics Shade",
  locale: "en_US",
  color: "#000000",
  backgroundColor: "#ffffff",
  favicon: "https://docs.pics.shade.cool/~gitbook/icon?size=small&theme=light",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" ">

      <body className={inter.className}><Theme/>{children}<Toaster/></body>
    </html>
  );
}


// export const runtime = 'experimental-edge'
