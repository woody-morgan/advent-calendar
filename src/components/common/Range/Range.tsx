import React, { useEffect, useRef, useState } from "react";
import styles from "./Range.module.scss";

interface Props {
	max?: number;
	size?: "small" | "medium" | "large";
	onClick?: () => void;
}

export default function Range({
	max = 50000,
	size = "medium",
}: Props): JSX.Element {
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState<number>(max / 2);

	const onSliderMove = (e: any) => {
		const { value, style } = e.target;
		style.setProperty(
			"--bgColor",
			"linear-gradient(90deg, #ffd951 0%, #ff7051 " +
				(value / max) * 100 +
				"%, #d5d4d3 " +
				(value / max) * 100 +
				"%, #d5d4d3 100%)",
		);
		setValue(value);
	};

	useEffect(() => {
		inputRef.current?.style.setProperty(
			"--bgColor",
			"linear-gradient(90deg, #ffd951 0%, #ff7051 " +
				(value / max) * 100 +
				"%, #d5d4d3 " +
				(value / max) * 100 +
				"%, #d5d4d3 100%)",
		);
	}, [max, value]);

	return (
		<div className={styles.container}>
			<input
				ref={inputRef}
				type="range"
				min={0}
				max={max}
				step={max / 100}
				value={value}
				onChange={onSliderMove}
			/>
		</div>
	);
}
