import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata = {
	title: "About Us",
	description: "Company history, leadership, strengths, facilities, and technical capabilities.",
};

export default function AboutPage() {
	return (
		<main>
			<section className="py-16">
				<Container>
					<SectionHeading subtitle="About" title="About Shreyash Solutions" align="left" />
					<div className="mt-8 grid gap-10 lg:grid-cols-2">
						<Reveal>
							<div>
								<h3 className="text-xl font-semibold">Company History</h3>
								<p className="mt-3 text-muted-foreground text-sm">Founded in Pune, Shreyash Solutions has steadily grown into a trusted partner for electromechanical sensor technology. Our commitment to engineering excellence and customer success drives our innovation.</p>
								<h3 className="mt-6 text-xl font-semibold">Leadership</h3>
								<ul className="mt-3 text-sm space-y-1">
									<li>• Mrs. Swati Tagunde</li>
									<li>• Mr. Bharat Tagunde</li>
								</ul>
							</div>
						</Reveal>
						<Reveal>
							<div>
								<h3 className="text-xl font-semibold">Strengths & Capabilities</h3>
								<ul className="mt-3 text-sm space-y-2 text-muted-foreground">
									<li>• Custom sensor design and prototyping</li>
									<li>• In-house testing and quality validation</li>
									<li>• Robust supply chain and reliable delivery</li>
									<li>• Application engineering and integration support</li>
								</ul>
								<h3 className="mt-6 text-xl font-semibold">Facilities</h3>
								<p className="mt-3 text-sm text-muted-foreground">State-of-the-art development and testing facilities enabling high precision and reliability in production.</p>
							</div>
						</Reveal>
					</div>
				</Container>
			</section>
		</main>
	);
}