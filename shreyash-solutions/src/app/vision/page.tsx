import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { FaBullseye, FaRocket } from "react-icons/fa";

export const metadata = {
	title: "Vision & Mission",
	description: "Our vision and mission statements",
};

export default function VisionPage() {
	return (
		<main>
			<section className="py-16">
				<Container>
					<SectionHeading subtitle="Vision & Mission" title="Driving Innovation and Reliability" align="left" />
					<div className="mt-10 grid gap-8 md:grid-cols-2">
						<Reveal>
							<div className="rounded-xl border p-6 bg-white/70 dark:bg-white/5">
								<div className="flex items-center gap-3">
									<FaRocket className="text-primary" />
									<h3 className="text-lg font-semibold">Vision</h3>
								</div>
								<p className="mt-2 text-sm text-muted-foreground">To be a globally recognized provider of electromechanical sensor technology, enabling safer, smarter, and more efficient systems.</p>
							</div>
						</Reveal>
						<Reveal>
							<div className="rounded-xl border p-6 bg-white/70 dark:bg-white/5">
								<div className="flex items-center gap-3">
									<FaBullseye className="text-primary" />
									<h3 className="text-lg font-semibold">Mission</h3>
								</div>
								<p className="mt-2 text-sm text-muted-foreground">Deliver high-quality sensor solutions through engineering excellence, continuous innovation, and customer-centric collaboration.</p>
							</div>
						</Reveal>
					</div>
				</Container>
			</section>
		</main>
	);
}