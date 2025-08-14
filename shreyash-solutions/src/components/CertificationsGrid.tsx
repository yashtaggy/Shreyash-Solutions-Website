import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const certs = [
	{ id: 1, name: "ISO 9001", img: "/vercel.svg" },
	{ id: 2, name: "ISO 14001", img: "/vercel.svg" },
	{ id: 3, name: "AS9100", img: "/vercel.svg" },
	{ id: 4, name: "RoHS", img: "/vercel.svg" },
];

export default function CertificationsGrid() {
	return (
		<section className="py-20">
			<Container>
				<SectionHeading subtitle="Certifications" title="Our Certifications" />
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{certs.map((c, i) => (
						<Reveal key={c.id} delay={i * 0.05}>
							<div className="group rounded-xl border p-6 hover:shadow-md transition-shadow bg-white/70 dark:bg-white/5">
								<div className="h-16 w-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
									<Image src={c.img} alt={c.name} width={160} height={40} className="h-10 w-auto" />
								</div>
								<p className="mt-3 text-center text-sm font-medium">{c.name}</p>
							</div>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}