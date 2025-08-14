import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { FaBolt, FaRupeeSign, FaShieldAlt } from "react-icons/fa";

const features = [
	{
		icon: <FaBolt className="text-primary" size={28} />,
		title: "Efficiency",
		desc: "Optimized designs and streamlined processes to deliver faster time-to-value.",
	},
	{
		icon: <FaRupeeSign className="text-primary" size={28} />,
		title: "Cost-Effectiveness",
		desc: "Competitive pricing with uncompromised quality across the product lifecycle.",
	},
	{
		icon: <FaShieldAlt className="text-primary" size={28} />,
		title: "Quality",
		desc: "Rigorous testing and robust engineering for reliable performance.",
	},
];

export default function WhyUs() {
	return (
		<section className="py-20 bg-[linear-gradient(to_bottom,transparent,rgba(56,189,248,0.05))]">
			<Container>
				<SectionHeading subtitle="Why Us" title="Efficiency, Cost-Effectiveness, and Quality" />
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((f, i) => (
						<Reveal key={f.title} delay={i * 0.05}>
							<div className="relative rounded-xl border p-6 bg-white/70 dark:bg-white/5">
								<div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
									{f.icon}
								</div>
								<h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
							</div>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}