import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const items = [
	{ href: "/vision", title: "Vision & Mission", desc: "Driving innovation with a focus on quality and reliability.", color: "from-sky-500/20 to-transparent" },
	{ href: "/products", title: "Products & Services", desc: "Explore our portfolio of sensors and custom solutions.", color: "from-cyan-500/20 to-transparent" },
	{ href: "/industries", title: "Industries Served", desc: "Automotive, Aerospace (Defense), Industrial, Agriculture.", color: "from-teal-500/20 to-transparent" },
];

export default function PreviewCards() {
	return (
		<section className="py-16">
			<Container>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item, i) => (
						<Reveal key={item.href} delay={i * 0.05}>
							<Link href={item.href} className="block rounded-xl border p-6 bg-gradient-to-b hover:shadow-lg transition-shadow">
								<div className={`rounded-md h-10 w-10 bg-gradient-to-br ${item.color}`} />
								<h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
							</Link>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}