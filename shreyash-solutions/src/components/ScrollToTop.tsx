"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 300);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	if (!visible) return null;

	return (
		<button
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			aria-label="Scroll to top"
			className="fixed bottom-6 right-6 z-50 rounded-full bg-primary text-white p-3 shadow-lg hover:bg-primary/90 transition-colors"
		>
			<FaArrowUp />
		</button>
	);
}