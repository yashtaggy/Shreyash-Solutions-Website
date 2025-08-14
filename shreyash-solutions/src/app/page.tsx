import Hero from "@/components/Hero";
import PreviewCards from "@/components/PreviewCards";
import IndustriesTiles from "@/components/IndustriesTiles";
import WhyUs from "@/components/WhyUs";

export default function Home() {
	return (
		<main>
			<Hero />
			<PreviewCards />
			<IndustriesTiles />
			<WhyUs />
		</main>
	);
}
