import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Navbar } from "@/components/Navbar"
import { Steps } from "@/components/Steps"
import { Technologies } from "@/components/Technologies"

export default function Home() {
	return (
		<main>
			<Navbar />
			<Header />
			<Steps />
			<Technologies />
			<Footer />
		</main>
	)
}
