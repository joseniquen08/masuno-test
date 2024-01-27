import styles from "./Separator.module.scss"
import classnames from "classnames/bind"

const cx = classnames.bind(styles)

export function Separator() {
	return (
		<div className={cx("separator")}>
			<div className={cx("separator-image")}>
				<picture>
					<source srcSet="/content_group_icons.svg" type="image/svg+xml" />
					<img src="/content_group_icons.svg" alt="GRUPO DE ICONOS" />
				</picture>
			</div>
		</div>
	)
}
