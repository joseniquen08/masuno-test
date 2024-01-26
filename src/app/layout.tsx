import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "@/styles/globals.scss"

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "+1 - MAS UNO Cyber Days",
	description:
		"+1 en Perú - Orbem Networks en USA. Somos una empresa especializada en brindar soluciones tecnológicas. Desarrollo de software a medida. Desarrollo de apps nativas, iOS, Android, Smart TV, tiendas virtuales, carritos de compra, animación 2D y administradores de contenido, HTML5, diseño, juegos. Somos una Fábrica de aplicaciones móviles.Creamos soluciones digitales para tu empresa.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={openSans.className}>{children}</body>
		</html>
	)
}
