/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { UpdownButtonTemplateComponentProps } from "../..";
import { RedditArrow } from "./icons/RedditArrow";
import { keyframes } from "@emotion/react";
import { FC, useCallback, useState } from "react";
import { style } from "./style";

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

const ICON = {
	animation: iconScale,
	durationMs: 700,
};

export const Reddit: FC<UpdownButtonTemplateComponentProps> = ({
	isLoading,
	userVoteDirection,
	totalScore,
	handlePressUp,
	handlePressDown,
	isCounterVisible,
}) => {
	const [animationActiveUp, setAnimationActiveUp] = useState<boolean>(false);
	const [animationActiveDown, setAnimationActiveDown] =
		useState<boolean>(false);

	const handleClickUp = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			handlePressUp(e);

			if (userVoteDirection !== 1) {
				setAnimationActiveUp(true);
			}
		},
		[userVoteDirection, handlePressUp],
	);

	const handleClickDown = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			handlePressDown(e);

			if (userVoteDirection !== -1) {
				setAnimationActiveDown(true);
			}
		},
		[userVoteDirection, handlePressDown],
	);

	const iconStyleUp = {
		...style.icon,
		...{
			animation: animationActiveUp
				? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
				: "none",
		},
		fill: userVoteDirection === 1 ? "#cc3700" : "#25252550",
	};

	const iconStyleDown = {
		...style.icon,
		...{
			animation: animationActiveDown
				? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
				: "none",
		},
		fill: userVoteDirection === -1 ? "#5a75cc" : "#25252550",
	};

	return (
		<div sx={style.root}>
			<button
				onClick={handleClickUp}
				disabled={isLoading}
				onAnimationEnd={() => setAnimationActiveUp(false)}
				sx={style.button}
			>
				<RedditArrow sx={iconStyleUp} />
			</button>
			{isCounterVisible && <div sx={style.counter}>{totalScore}</div>}
			{isLoading && <div sx={style.counter}>-</div>}
			<button
				onClick={handleClickDown}
				disabled={isLoading}
				onAnimationEnd={() => setAnimationActiveDown(false)}
				sx={{
					...style.button,
					transform: "rotate(180deg)",
				}}
			>
				<RedditArrow sx={iconStyleDown} />
			</button>
		</div>
	);
};
