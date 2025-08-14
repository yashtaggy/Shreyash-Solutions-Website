"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
	children: React.ReactNode;
	from?: Direction;
	className?: string;
	delay?: number;
}

const getVariants = (from: Direction): Variants => {
	switch (from) {
		case "up":
			return { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
		case "down":
			return { hidden: { opacity: 0, y: -24 }, show: { opacity: 1, y: 0 } };
		case "left":
			return { hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } };
		case "right":
			return { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } };
		default:
			return { hidden: { opacity: 0 }, show: { opacity: 1 } };
	}
};

export default function Reveal({ children, from = "up", className, delay = 0 }: RevealProps) {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="show"
			variants={getVariants(from)}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, ease: "easeOut", delay }}
		>
			{children}
		</motion.div>
	);
}