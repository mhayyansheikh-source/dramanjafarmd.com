import { Manrope } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import FloatingChatBot from "@/components/FloatingChatBot";

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope" 
});

export const metadata = {
  title: "Southwest Houston Sugar Land Physician | Family Practice Doctor",
  description: "Reliable and top-notch medical services for parents, adults, elderly patients, and children. Let us at Sugar Land Physicians help. Covid19 vaccine available.",
  keywords: "Sugar land physician, family practice doctor, southwest houston doctor, Dr. Aman Jafar, primary care physician",
  openGraph: {
    title: "Southwest Houston Sugar Land Physician | Family Practice Doctor",
    description: "Reliable and top-notch medical services for parents, adults, elderly patients, and children.",
    url: "https://dramanjafarmd.com/",
    siteName: "Dr. Aman Jafar",
    images: [
      {
        url: "https://dramanjafarmd.com/wp-content/uploads/2020/11/logo-3.png",
        width: 200,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        {children}
        <FloatingChatBot />
      </body>
    </html>
  );
}
