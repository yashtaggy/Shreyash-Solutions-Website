"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%)]" />
			<Container>
				<div className="py-20 sm:py-28 md:py-32">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground"
					>
						Empowering Innovation Through Sensor Technology
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
						className="mt-6 max-w-3xl text-base sm:text-lg text-muted-foreground"
					>
						Shreyash Solutions is a Pune-based leader in electromechanical sensor technology, delivering reliable, high-performance solutions for industrial and mission-critical applications.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
						className="mt-10 flex flex-wrap gap-4"
					>
						<Link href="/products" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-white font-medium shadow-sm hover:bg-primary/90 transition-colors">
							Explore Products
						</Link>
						<Link href="/contact" className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-primary font-medium hover:bg-primary/10 transition-colors">
							Contact Us
						</Link>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}