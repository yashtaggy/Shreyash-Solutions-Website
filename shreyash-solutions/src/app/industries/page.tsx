import IndustriesTiles from "@/components/IndustriesTiles";

export const metadata = {
	title: "Industries Served",
	description: "Automotive, Aerospace (Defense), Industrial, Agriculture",
};

export default function IndustriesPage() {
	return (
		<main>
			<IndustriesTiles />
		</main>
	);
}