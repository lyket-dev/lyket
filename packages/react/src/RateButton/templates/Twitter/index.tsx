/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { LikeButtonTemplateComponentProps } from "../..";
import { TwitterHeartFull } from "./icons/TwitterHeartFull";
import { TwitterHeartEmpty } from "./icons/TwitterHeartEmpty";
import { keyframes } from "@emotion/react";
import { FC, useCallback, useState } from "react";
import { style } from "./style";

const dotBurst = keyframes({
	"0%": {
		opacity: "0",
		transform: "translateY(-0.5em) scale(1)",
	},
	"52%": {
		opacity: "1",
		transform: "translateY(-1.6em) scale(1.3)",
	},
	"100%": {
		transform: "translateY(-2.7em) scale(0)",
	},
});

const iconScale = keyframes({
	"0%": {
		transform: "scale(0)",
	},
	"52%": {
		transform: "scale(1.2)",
	},
	"72%": {
		transform: "scale(0.9)",
	},
	"100%": {
		transform: "scale(1)",
	},
});

const ringScale = keyframes({
	"0%": {
		opacity: "1",
		borderWidth: "0.5em",
	},
	"52%": {
		opacity: "0",
		borderWidth: "0",
	},
});

const DOTS = {
	count: 6,
	size: 0.2,
	colors: [
		"lightcoral",
		"yellow",
		"pink",
		"lightseagreen",
		"orange",
		"aliceblue",
	],
	durationMs: 600,
	animation: dotBurst,
};

const RING = {
	color: "#e095ed",
	durationMs: DOTS.durationMs,
	animation: ringScale,
};

const HEART = {
	animation: iconScale,
	durationMs: 700,
};

export const Twitter: FC<LikeButtonTemplateComponentProps> = ({
	isLoading,
	userLiked,
	totalLikes,
	handlePress,
	isCounterVisible,
}) => {
	const [animationActive, setAnimationActive] = useState<boolean>(false);

	const dots = [];
	for (let i = 0; i < DOTS.count; i++) {
		dots.push(
			<div
				key={i}
				sx={{
					transform: `rotate(${(360 / DOTS.count) * i}deg)`,
					transformOrigin: `${DOTS.size}em 0`,
					marginLeft: `-${DOTS.size}em`,
				}}
			>
				<div
					sx={{
						opacity: "0",
						width: `${DOTS.size}em`,
						height: `${DOTS.size}em`,
						borderRadius: `${DOTS.size}em`,
						backgroundColor: `${DOTS.colors[i]}`,
						position: "absolute",
						animation: animationActive
							? `${dotBurst} ${DOTS.durationMs}ms ease forwards`
							: null,
					}}
				/>
			</div>,
		);
	}

	const ring = (
		<div
			sx={{
				...style.ring,
				...{
					border: `1px solid ${RING.color}`,
					animation: animationActive
						? `${RING.animation} ${RING.durationMs}ms ease forwards`
						: null,
				},
			}}
		/>
	);

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			if (!userLiked) {
				setAnimationActive(true);
				setTimeout(() => setAnimationActive(false), DOTS.durationMs);
			}
			handlePress(e);
		},
		[userLiked, handlePress],
	);

	const Icon = userLiked ? TwitterHeartFull : TwitterHeartEmpty;

	const buttonStyle = {
		fill: userLiked && !isLoading ? "#E5214A" : "#aaa",
		animation: animationActive
			? `${HEART.animation} ${HEART.durationMs}ms ease forwards`
			: null,
		// fill: (theme) =>
		// userLiked && !isLoading
		// 	? theme.rawColors?.primary
		// 	: theme.rawColors?.icon,
	};

	return (
		<div sx={style.root}>
			<button onClick={handleClick} sx={style.button} disabled={isLoading}>
				<div sx={style.dotsContainer}> {dots} </div>
				<div sx={style.dotsRotContainer}> {dots} </div>
				{ring}
				<Icon
					sx={{
						...style.icon,
						...buttonStyle,
					}}
				/>
			</button>
			{isCounterVisible && <div sx={style.counter}>{totalLikes}</div>}
		</div>
	);
};
