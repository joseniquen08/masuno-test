import { Separator } from "../Separator"
import styles from "./Steps.module.scss"
import classnames from "classnames/bind"

const cx = classnames.bind(styles)

export function Steps() {
	return (
		<section className={cx("section")}>
			<div className={cx("container")}>
				<Separator />
				<p className={cx("section-title")}>
					¿Cómo obtengo el descuento por Cyber Days?
					<picture>
						<source srcSet="/dark_big_red_underline.svg" type="image/svg+xml" />
						<img
							src="/dark_big_red_underline.svg"
							alt="SUBRAYADO ROJO GRANDE OSCURO"
						/>
					</picture>
				</p>
				<p className={cx("section-description")}>
					Para adquirir nuestro descuento especial por <span>Cyber Days</span>{" "}
					sigue los siguientes pasos
				</p>
				<div className={cx("steps")}>
					<article>
						<p className={cx("step-header")}>Paso 1</p>
						<div className={cx("step-icon")}>
							<picture>
								<source srcSet="/step_1.svg" type="image/svg+xml" />
								<img src="/step_1.svg" alt="PASO 1" />
							</picture>
						</div>
						<p className={cx("step-title")}>Regístrate</p>
						<p className={cx("step-description")}>
							Completa el formulario con tus datos personales y acepta los
							términos.
						</p>
					</article>
					<article>
						<p className={cx("step-header")}>Paso 2</p>
						<div className={cx("step-icon")}>
							<picture>
								<source srcSet="/step_2.svg" type="image/svg+xml" />
								<img src="/step_2.svg" alt="PASO 2" />
							</picture>
						</div>
						<p className={cx("step-title")}>Recibe un cupón</p>
						<p className={cx("step-description")}>
							Recibirás un correo electrónico donde podrás ver el cupón de
							descuento.
						</p>
					</article>
					<article>
						<p className={cx("step-header")}>Paso 3</p>
						<div className={cx("step-icon")}>
							<picture>
								<source srcSet="/step_3.svg" type="image/svg+xml" />
								<img src="/step_3.svg" alt="PASO 3" />
							</picture>
						</div>
						<p className={cx("step-title")}>Empieza a ahorrar</p>
						<p className={cx("step-description")}>
							¡Y listo! Podrás usarlo del 28 al 30 de Marzo por compras en
							nuestra tienda online.
						</p>
					</article>
				</div>
			</div>
		</section>
	)
}
