"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import { FaBars, FaTimes } from "react-icons/fa";

const nav = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/products", label: "Products" },
	{ href: "/industries", label: "Industries" },
	{ href: "/vision", label: "Vision" },
	{ href: "/certifications", label: "Certifications" },
	{ href: "/why-us", label: "Why Us" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<header className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 ${scrolled ? "shadow-sm" : ""}`}>
			<Container className="flex items-center justify-between py-3">
				<Link href="/" className="flex items-center gap-2 text-xl font-semibold">
					<span className="text-primary">Shreyash</span> Solutions
				</Link>
				<nav className="hidden md:flex gap-6">
					{nav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`text-sm font-medium hover:text-primary transition-colors ${pathname === item.href ? "text-primary" : "text-muted-foreground"}`}
						>
							{item.label}
						</Link>
					))}
				</nav>
				<button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
					{open ? <FaTimes /> : <FaBars />}
				</button>
			</Container>
			{open && (
				<div className="md:hidden border-t">
					<Container className="py-3 flex flex-col gap-3">
						{nav.map((item) => (
							<Link key={item.href} href={item.href} className={`text-sm font-medium ${pathname === item.href ? "text-primary" : "text-foreground"}`}>
								{item.label}
							</Link>
						))}
					</Container>
				</div>
			)}
		</header>
	);
}