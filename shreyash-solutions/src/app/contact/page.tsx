import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata = {
	title: "Contact",
	description: "Get in touch with Shreyash Solutions",
};

export default function ContactPage() {
	return (
		<main>
			<section className="py-16">
				<Container>
					<SectionHeading subtitle="Contact" title="Contact Us" align="left" />
					<div className="mt-8 grid gap-10 lg:grid-cols-2">
						<div>
							<ContactForm />
						</div>
						<div className="space-y-6">
							<div>
								<h3 className="text-lg font-semibold">Reach Us</h3>
								<ul className="mt-3 text-sm space-y-2 text-muted-foreground">
									<li>Phone: +91-XXXXXXXXXX</li>
									<li>Email: info@shreyashsolutions.com</li>
									<li>Address: Pune, Maharashtra, India</li>
								</ul>
							</div>
							<div className="rounded-xl overflow-hidden border h-[300px]">
								<iframe
									title="Shreyash Solutions Location"
									width="100%"
									height="100%"
									loading="lazy"
									allowFullScreen
									referrerPolicy="no-referrer-when-downgrade"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0280799309214!2d73.856743!3d18.562603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06a3f3a9e7f%3A0x9e3e1d3e1e1e1e1e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1630000000000"
								/>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</main>
	);
}