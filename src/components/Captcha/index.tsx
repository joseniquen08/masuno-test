"use client"

import { ChangeEvent, useEffect, useRef, useState } from "react"
import styles from "./Captcha.module.scss"
import classnames from "classnames/bind"
import { FaUndo } from "react-icons/fa"

const cx = classnames.bind(styles)

export function Captcha() {
	const [captchaText, setCaptchaText] = useState<string>("")
	const [userInput, setUserInput] = useState<string>("")
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (canvas) {
			const ctx = canvas.getContext("2d")
			if (ctx) initializeCaptcha(ctx)
		}
	}, [])

	const generateRandomChar = (min: number, max: number) =>
		String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min))

	const generateCaptchaText = () => {
		let captcha = ""
		for (let i = 0; i < 3; i++) {
			captcha += generateRandomChar(65, 90)
			captcha += generateRandomChar(97, 122)
			captcha += generateRandomChar(48, 57)
		}
		return captcha
			.split("")
			.sort(() => Math.random() - 0.5)
			.join("")
	}

	const drawCaptchaOnCanvas = (
		ctx: CanvasRenderingContext2D,
		captcha: string,
	) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		const textColors = ["rgb(0,0,0)", "rgb(130,130,130)"]
		const letterSpace = 150 / captcha.length
		for (let i = 0; i < captcha.length; i++) {
			const xInitialSpace = 10
			ctx.font = "20px Roboto Mono"
			ctx.fillStyle = textColors[Math.floor(Math.random() * 2)]
			ctx.fillText(
				captcha[i],
				xInitialSpace + i * letterSpace,

				// Randomize Y position slightly
				Math.floor(Math.random() * 16 + 25),
				100,
			)
		}
	}

	const initializeCaptcha = (ctx: CanvasRenderingContext2D) => {
		setUserInput("")
		const newCaptcha = generateCaptchaText()
		setCaptchaText(newCaptcha)
		drawCaptchaOnCanvas(ctx, newCaptcha)
	}

	const handleUserInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserInput(e.target.value)
	}

	return (
		<div className={cx("container")}>
			<div className={cx("wrapper")}>
				<div className={cx("canvas-container")}>
					<canvas height={50} width={170} ref={canvasRef} />
				</div>
				<button
					type="button"
					onClick={() =>
						initializeCaptcha(canvasRef?.current?.getContext("2d")!)
					}
				>
					<FaUndo size={16} />
				</button>
			</div>
			<input
				type="text"
				required
				placeholder="Ingrese captcha"
				value={userInput}
				onChange={handleUserInputChange}
			/>
		</div>
	)
}
