import styles from "./Navbar.module.scss"
import classnames from "classnames/bind"

const cx = classnames.bind(styles)

export function Navbar() {
	return (
		<section className={cx("container")}>
			<div>
				<picture>
					<source srcSet="/logo.svg" type="image/svg+xml" />
					<img src="/logo.svg" alt="MAS UNO LOGO" className={cx("image")} />
				</picture>
			</div>
		</section>
	)
}
