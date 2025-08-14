import React from "react";
import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
	title: string;
	subtitle?: string;
	align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
	return (
		<div className={align === "center" ? "text-center" : "text-left"}>
			<Reveal>
				<p className="text-sm font-medium tracking-widest uppercase text-primary/80">{subtitle ?? ""}</p>
			</Reveal>
			<Reveal delay={0.05}>
				<h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-foreground">{title}</h2>
			</Reveal>
		</div>
	);
}