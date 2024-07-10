import type { Metadata } from 'next';
// import { Inter } from "next/font/google";
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'Create Clone Oh-studio',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="font-neue-montreal">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
