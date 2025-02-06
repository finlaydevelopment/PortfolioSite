import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finlay Development - Expert Website Development, Creative Design & SEO Services in Northern Ireland",
  description: "Finlay Development, based in Northern Ireland, specializes in professional website development, innovative digital design, and comprehensive SEO services. Elevate your business or hobby with our expert web solutions. We turn your ideas into reality with cutting-edge technology and proven strategies for online success.",
  robots: "index, follow",
  keywords: "website development, digital design, SEO services, web development Northern Ireland, online business, creative design, professional web services",
  canonical: "https://www.finlaydev.com/",
  author: "Finlay Development",
  og: {
    title: "Finlay Development - Website Development, Creative Design & SEO Services",
    description: "Professional website development and SEO services in Northern Ireland. Transform your ideas into reality with Finlay Development's expert web solutions.",
    url: "https://www.finlaydev.com/",
    type: "website",
    image: "https://www.finlaydev.com/images/og-image.jpg", // Replace with your actual image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Finlay Development - Website Development & SEO Services",
    description: "Finlay Development offers professional website development, creative design, and SEO services to help your business thrive online.",
    image: "https://www.finlaydev.com/images/twitter-image.jpg", // Replace with your actual image URL
    site: "@finlaydev", // Replace with your actual Twitter handle if applicable
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
