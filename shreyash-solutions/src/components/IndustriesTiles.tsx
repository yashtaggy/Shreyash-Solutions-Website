import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const industries = [
	{ title: "Automotive", color: "from-orange-400/30 to-transparent" },
	{ title: "Aerospace (Defense)", color: "from-indigo-400/30 to-transparent" },
	{ title: "Industrial", color: "from-emerald-400/30 to-transparent" },
	{ title: "Agriculture", color: "from-lime-400/30 to-transparent" },
];

export default function IndustriesTiles() {
	return (
		<section className="py-20">
			<Container>
				<SectionHeading subtitle="Industries" title="Industries We Serve" />
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{industries.map((ind, i) => (
						<Reveal key={ind.title} delay={i * 0.05}>
							<div className="rounded-xl border p-6 bg-gradient-to-b hover:shadow-md transition-shadow">
								<div className={`h-10 w-10 rounded-md bg-gradient-to-br ${ind.color}`} />
								<h3 className="mt-4 font-semibold">{ind.title}</h3>
							</div>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}