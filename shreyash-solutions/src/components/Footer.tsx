import Link from "next/link";
import Container from "@/components/Container";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="mt-20 border-t">
			<Container className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
				<div>
					<h4 className="text-lg font-semibold">Shreyash Solutions</h4>
					<p className="mt-3 text-sm text-muted-foreground">Electromechanical sensor technology company based in Pune, India.</p>
				</div>
				<div>
					<h5 className="text-sm font-semibold">Quick Links</h5>
					<ul className="mt-3 space-y-2 text-sm">
						<li><Link className="hover:text-primary" href="/about">About</Link></li>
						<li><Link className="hover:text-primary" href="/products">Products</Link></li>
						<li><Link className="hover:text-primary" href="/industries">Industries</Link></li>
						<li><Link className="hover:text-primary" href="/contact">Contact</Link></li>
					</ul>
				</div>
				<div>
					<h5 className="text-sm font-semibold">Contact</h5>
					<ul className="mt-3 space-y-2 text-sm">
						<li>Phone: +91-XXXXXXXXXX</li>
						<li>Email: info@shreyashsolutions.com</li>
						<li>Address: Pune, Maharashtra, India</li>
					</ul>
				</div>
				<div>
					<h5 className="text-sm font-semibold">Follow Us</h5>
					<div className="mt-3 flex items-center gap-3 text-muted-foreground">
						<Link href="#" aria-label="LinkedIn" className="hover:text-primary"><FaLinkedin size={20} /></Link>
						<Link href="#" aria-label="Twitter" className="hover:text-primary"><FaTwitter size={20} /></Link>
						<Link href="#" aria-label="Facebook" className="hover:text-primary"><FaFacebook size={20} /></Link>
					</div>
				</div>
			</Container>
			<div className="border-t">
				<Container className="py-4 text-xs text-muted-foreground flex items-center justify-between">
					<p>© {new Date().getFullYear()} Shreyash Solutions. All rights reserved.</p>
					<p>Built with Next.js</p>
				</Container>
			</div>
		</footer>
	);
}