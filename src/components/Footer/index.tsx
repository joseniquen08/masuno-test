import styles from "./Footer.module.scss"
import variables from "@/styles/variables.module.scss"
import classnames from "classnames/bind"
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaPhoneAlt,
} from "react-icons/fa"

const cx = classnames.bind(styles)

export function Footer() {
	return (
		<section className={cx("section")}>
			<div className={cx("container")}>
				<div className={cx("col-1")}>
					<div>
						<picture>
							<source srcSet="/logo_white.svg" type="image/svg+xml" />
							<img src="/logo_white.svg" alt="MAS UNO LOGO" />
						</picture>
					</div>
					<div className={cx("content")}>
						<p className={cx("title")}>Nosotros</p>
						<p className={cx("item")}>
							<a href="#">Somos Mas uno</a>
						</p>
					</div>
				</div>
				<div className={cx("col-2")}>
					<p className={cx("title")}>Te informamos</p>
					<ul className={cx("links")}>
						<li className={cx("item")}>
							<a href="#">Preguntas frecuentes</a>
						</li>
						<li className={cx("item")}>
							<a href="#">Términos y condiciones</a>
						</li>
						<li className={cx("item")}>
							<a href="#">Medios de pago</a>
						</li>
						<li className={cx("item")}>
							<a href="#">Políticas de entrega</a>
						</li>
						<li className={cx("item")}>
							<a href="#">Libro de reclamaciones</a>
						</li>
					</ul>
					<div>
						<picture>
							<source srcSet="/complaints_book.svg" type="image/svg+xml" />
							<img src="/complaints_book.svg" alt="MAS UNO LOGO" />
						</picture>
					</div>
				</div>
				<div className={cx("col-3")}>
					<p className={cx("title")}>Contáctanos</p>
					<p className={cx("phone")}>
						<FaPhoneAlt color={variables.whiteBrandColor} size={20} />{" "}
						00000-0000
					</p>
					<ul className={cx("social-icons")}>
						<li>
							<a href="#" className={cx("item")}>
								<FaFacebookF color={variables.primaryColor} size={20} />
							</a>
						</li>
						<li>
							<a href="#" className={cx("item")}>
								<FaTwitter color={variables.primaryColor} size={20} />
							</a>
						</li>
						<li>
							<a href="#" className={cx("item")}>
								<FaLinkedinIn color={variables.primaryColor} size={20} />
							</a>
						</li>
					</ul>
					<p className={cx("text-footer")}>© 2022 Mas uno Lima - Perú</p>
				</div>
			</div>
		</section>
	)
}
