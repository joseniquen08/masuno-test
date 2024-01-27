interface ISlide {
	id: number
	title: string
	description: string
	urlImage: string
	altImage: string
}

export const slides: ISlide[] = [
	{
		id: 1,
		title: "PHP",
		description:
			"Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.",
		urlImage: "/slide_php.png",
		altImage: "IMAGEN PHP",
	},
	{
		id: 2,
		title: "Flutter",
		description:
			"Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.",
		urlImage: "/slide_flutter.png",
		altImage: "IMAGEN FLUTTER",
	},
	{
		id: 3,
		title: "Diseño UX/UI",
		description:
			"Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.",
		urlImage: "/slide_ux_ui.png",
		altImage: "IMAGEN UX/UI",
	},
]
