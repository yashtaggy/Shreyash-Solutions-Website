"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { useState } from "react";

type Product = {
	name: string;
	description: string;
	specs: string[];
};

const products: Product[] = [
	{
		name: "Fluid Level Sensor",
		description: "Reliable fluid level measurement for industrial and automotive applications.",
		specs: ["Measuring range: 0-100%", "Operating temp: -20°C to 85°C", "Supply: 5-24V"],
	},
	{
		name: "Potentiometric Sensor",
		description: "High-precision position sensing for linear and rotary applications.",
		specs: ["Resolution: up to 0.01mm", "Linearity: ±0.25%", "IP67 sealing"],
	},
	{
		name: "Custom Sensor Solutions",
		description: "Tailored electromechanical sensor designs to meet unique requirements.",
		specs: ["Rapid prototyping", "Application engineering", "Lifecycle support"],
	},
];

function ProductCard({ product, index }: { product: Product; index: number }) {
	const [open, setOpen] = useState(false);
	return (
		<Reveal delay={index * 0.05}>
			<div className="rounded-xl border p-6 bg-white/70 dark:bg-white/5">
				<h3 className="text-lg font-semibold">{product.name}</h3>
				<p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
				<button className="mt-4 text-sm text-primary hover:underline" onClick={() => setOpen((v) => !v)}>
					{open ? "Hide specifications" : "View specifications"}
				</button>
				{open && (
					<ul className="mt-3 text-sm list-disc pl-4 space-y-1 text-muted-foreground">
						{product.specs.map((s) => (
							<li key={s}>{s}</li>
						))}
					</ul>
				)}
			</div>
		</Reveal>
	);
}

export default function ProductsPage() {
	return (
		<main>
			<section className="py-16">
				<Container>
					<SectionHeading subtitle="Products" title="Products & Services" align="left" />
					<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{products.map((p, i) => (
							<ProductCard key={p.name} product={p} index={i} />
						))}
					</div>
				</Container>
			</section>
		</main>
	);
}