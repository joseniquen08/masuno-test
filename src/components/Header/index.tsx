"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import { Captcha } from "../Captcha"
import styles from "./Header.module.scss"
import classnames from "classnames/bind"

const cx = classnames.bind(styles)

export function Header() {
	const [checkedTPP, setCheckedTPP] = useState<boolean>(false)
	const [checkedUDP, setCheckedUDP] = useState<boolean>(false)

	const btnSubmitRef = useRef<HTMLButtonElement>(null)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	useEffect(() => {
		if (checkedTPP && checkedUDP) {
			if (btnSubmitRef.current) btnSubmitRef.current.disabled = false
		} else {
			if (btnSubmitRef.current) btnSubmitRef.current.disabled = true
		}
	}, [checkedTPP, checkedUDP])

	return (
		<section className={cx("section")}>
			<div className={cx("container")}>
				<div className={cx("col-1")}>
					<div className={cx("col-1-header")}>
						<p className={cx("paragraph-top")}>
							<picture>
								<source srcSet="/header_group_icons.svg" type="image/svg+xml" />
								<img src="/header_group_icons.svg" alt="GRUPO DE ICONOS" />
							</picture>
							ES HORA DE
						</p>
						<p className={cx("paragraph-middle")}>CYBER DAYS</p>
						<p className={cx("paragraph-bottom")}>
							<span className={cx("pb-start")}>EN</span>
							<span className={cx("pb-end")}>
								Más uno
								<picture>
									<source srcSet="/red_underline.svg" type="image/svg+xml" />
									<img src="/red_underline.svg" alt="SUBRAYADO ROJO" />
								</picture>
							</span>
						</p>
					</div>
					<p className={cx("col-1-deadline")}>Del 28 al 30 de marzo</p>
					<article>
						<div className={cx("coupon-content")}>
							<p className={cx("paragraph-top")}>
								Regístrate y obtén
								<picture>
									<source
										srcSet="/dark_red_underline.svg"
										type="image/svg+xml"
									/>
									<img
										src="/dark_red_underline.svg"
										alt="SUBRAYADO ROJO OSCURO"
									/>
								</picture>
							</p>
							<div className={cx("percent-content")}>
								<picture>
									<source srcSet="/percent.png" type="image/png" />
									<img
										src="/percent.png"
										alt="PORCENTAJE DE DESCUENTO"
										className={cx("pc-image")}
									/>
								</picture>
								<p className={cx("pc-paragraph")}>
									<span className={cx("pc-top")}>En tu primera compra de</span>
									<span className={cx("pc-bottom")}>CYBER DAYS</span>
								</p>
							</div>
							<p className={cx("paragraph-bottom")}>
								Aplicamos el descuento mediante un código que se te eviará a tu
								correo registrado.
							</p>
							<p className={cx("paragraph-bottom")}>
								Cupón válido del 28 al 30 de marzo.
							</p>
							<p className={cx("paragraph-bottom")}>
								*Aplican términos y condiciones
							</p>
							<picture>
								<source srcSet="/scissors_coupon.svg" type="image/svg+xml" />
								<img
									src="/scissors_coupon.svg"
									alt="ÍCONO DE TIJERA"
									className={cx("cc-scissors")}
								/>
							</picture>
						</div>
					</article>
				</div>
				<div className={cx("col-2")}>
					<form onSubmit={handleSubmit}>
						<p className={cx("form-title")}>
							Completa tus datos
							<picture>
								<source srcSet="/blue_underline.svg" type="image/svg+xml" />
								<img src="/blue_underline.svg" alt="SUBRAYADO AZUL" />
							</picture>
						</p>
						<div className={cx("form-content")}>
							<div className={cx("form-control")}>
								<label htmlFor="">
									Nombres <span>*</span>
								</label>
								<input type="text" required placeholder="Ingrese sus nombres" />
							</div>
							<div className={cx("form-control")}>
								<label htmlFor="">
									Apellidos <span>*</span>
								</label>
								<input
									type="text"
									required
									placeholder="Ingrese sus apellidos"
								/>
							</div>
							<div className={cx("form-control")}>
								<label htmlFor="">
									Teléfono celular <span>*</span>
								</label>
								<input
									type="text"
									required
									placeholder="Ingrese su número telefónico"
								/>
							</div>
							<div className={cx("form-control")}>
								<label htmlFor="">
									Correo electrónico <span>*</span>
								</label>
								<input
									type="text"
									required
									placeholder="Ingrese su correo electrónico"
								/>
							</div>
							<div className={cx("form-control")}>
								<label htmlFor="">Tus favoritos</label>
								<select name="" id="">
									<option>Seleccione</option>
								</select>
							</div>
							<div className={cx("form-control")}>
								<Captcha />
							</div>
						</div>
						<div className={cx("form-footer")}>
							<div className={cx("ff-checkbox")}>
								<label htmlFor="">
									<input
										type="checkbox"
										onChange={(e) => setCheckedTPP(e.target.checked)}
									/>{" "}
									Acepto los <span>Términos y políticas de privacidad</span>
								</label>
								<label htmlFor="">
									<input
										type="checkbox"
										onChange={(e) => setCheckedUDP(e.target.checked)}
									/>{" "}
									Acepto el <span>Uso de datos personales</span>
								</label>
							</div>
							<button type="submit" ref={btnSubmitRef} disabled={true}>
								Registrarme
							</button>
							<p className={cx("ff-description")}>
								Aprovecha las mejores ofertas y descuentos en cerdo, congelados,
								embutidos <span>y mucho más.</span> No te pierdas de nada estos
								Cyberdays registrándote y obteniendo grandes descuentos
								exclusivos.
							</p>
						</div>
						<picture>
							<source
								srcSet="/cyber_days_sello_empresa_certificada_2022.png"
								type="image/png"
							/>
							<img
								src="/cyber_days_sello_empresa_certificada_2022.png"
								alt="CYBER DAYS SELLO"
								className={cx("form-stamp-image")}
							/>
						</picture>
					</form>
				</div>
			</div>
		</section>
	)
}
