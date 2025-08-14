import Container from "@/components/Container";
import Link from "next/link";

export default function ProductsCTA() {
	return (
		<section className="py-16">
			<Container>
				<div className="rounded-2xl border p-8 bg-gradient-to-r from-primary/10 to-transparent">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div>
							<h3 className="text-xl font-semibold">Looking for custom sensor solutions?</h3>
							<p className="mt-2 text-sm text-muted-foreground">Explore our products or reach out to discuss your application.</p>
						</div>
						<div className="flex gap-3">
							<Link href="/products" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-white font-medium hover:bg-primary/90">Explore Products</Link>
							<Link href="/contact" className="inline-flex items-center rounded-md border border-primary px-5 py-2.5 text-primary font-medium hover:bg-primary/10">Contact Us</Link>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}