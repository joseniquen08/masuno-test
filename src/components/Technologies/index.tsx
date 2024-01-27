"use client"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Separator } from "../Separator"
import styles from "./Technologies.module.scss"
import classnames from "classnames/bind"
import { slides } from "@/data/slides"
import { useState } from "react"
import variables from "@/styles/variables.module.scss"

const cx = classnames.bind(styles)

export function Technologies() {
	const [pos, setPos] = useState<number>(0)

	const handlePrev = () => {
		setPos((prev) => (prev != 0 ? prev - 1 : slides.length - 1))
	}

	const handleNext = () => {
		setPos((prev) => (prev != slides.length - 1 ? prev + 1 : 0))
	}

	return (
		<section className={cx("section")}>
			<div className={cx("container")}>
				<div className={cx("section-header")}>
					<Separator />
					<div>
						<picture>
							<source srcSet="/logo.svg" type="image/svg+xml" />
							<img src="/logo.svg" alt="MAS UNO LOGO" className={cx("image")} />
						</picture>
					</div>
					<p className={cx("section-title")}>
						Las mejores tecnologías de Más uno
						<picture>
							<source
								srcSet="/dark_big_red_underline.svg"
								type="image/svg+xml"
							/>
							<img
								src="/dark_big_red_underline.svg"
								alt="SUBRAYADO ROJO GRANDE OSCURO"
							/>
						</picture>
					</p>
				</div>
				<div className={cx("carousel")}>
					{slides.map((slide, i) => (
						<input
							key={slide.id}
							className={cx("carousel-activator")}
							type="radio"
							name="carousel"
							checked={i === pos}
							onChange={(e) => setPos(e.target.checked ? i : 0)}
							id={`${slide.id}`}
						/>
					))}
					<div className={cx("carousel-track")}>
						{slides.map((slide) => (
							<div key={slide.id} className={cx("carousel-slide")}>
								<div className={cx("carousel-content")}>
									<div className={cx("cc-description")}>
										<div>
											<picture>
												<source srcSet="/star_icon.svg" type="image/svg+xml" />
												<img src="/star_icon.svg" alt="ICONO DE ESTRELLA" />
											</picture>
										</div>
										<p className={cx("ccd-title")}>{slide.title}</p>
										<p className={cx("ccd-description")}>{slide.description}</p>
										<button type="button">Ver tecnología</button>
									</div>
									<div className={cx("cc-image")}>
										<picture>
											<source srcSet={slide.urlImage} type="image/png" />
											<img
												src={slide.urlImage}
												alt={slide.altImage}
												className={cx("image")}
											/>
										</picture>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className={cx("carousel-indicators")}>
						{slides.map((slide) => (
							<label key={slide.id} htmlFor={`${slide.id}`}></label>
						))}
					</div>
					<button
						className={cx("btn-carousel-control", "btn-carousel-prev")}
						onClick={handlePrev}
					>
						<FaChevronLeft size={28} color={variables.grayBrandColor} />
					</button>
					<button
						className={cx("btn-carousel-control", "btn-carousel-next")}
						onClick={handleNext}
					>
						<FaChevronRight size={28} />
					</button>
				</div>
			</div>
		</section>
	)
}
