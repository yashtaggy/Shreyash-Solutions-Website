import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Shreyash Solutions",
		template: "%s | Shreyash Solutions",
	},
	description: "Pune-based electromechanical sensor technology company.",
	metadataBase: new URL("https://www.shreyashsolutions.com"),
	openGraph: {
		title: "Shreyash Solutions",
		description: "Pune-based electromechanical sensor technology company.",
		url: "https://www.shreyashsolutions.com",
		siteName: "Shreyash Solutions",
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Shreyash Solutions",
		description: "Pune-based electromechanical sensor technology company.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	);
}
