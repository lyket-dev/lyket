/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { UpdownButtonTemplateComponentProps } from "../..";
import { ThumbIcon } from "./icons/ThumbIcon";
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

const RING = {
	durationMs: 600,
	animation: ringScale,
};

const ICON = {
	animation: iconScale,
	durationMs: 700,
};

export const Simple: FC<UpdownButtonTemplateComponentProps> = ({
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
				setTimeout(() => setAnimationActiveUp(false), ICON.durationMs);
			}
		},
		[userVoteDirection, handlePressUp],
	);

	const handleClickDown = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			handlePressDown(e);

			if (userVoteDirection !== -1) {
				setAnimationActiveDown(true);
				setTimeout(() => setAnimationActiveDown(false), ICON.durationMs);
			}
		},
		[userVoteDirection, handlePressDown],
	);

	const iconStyleUp = {
		...style.icon,
		...{
			animation: animationActiveUp
				? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
				: null,
		},
	};

	const iconStyleDown = {
		...style.icon,
		...{
			animation: animationActiveDown
				? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
				: null,
		},
	};

	const ringStyleUp = {
		...style.ring,
		...{
			animation: animationActiveUp
				? `${RING.animation} ${RING.durationMs}ms ease forwards`
				: null,
		},
	};

	const ringStyleDown = {
		...style.ring,
		...{
			animation: animationActiveDown
				? `${RING.animation} ${RING.durationMs}ms ease forwards`
				: null,
		},
	};

	const upButtonStyle = {
		bg: (theme) =>
			userVoteDirection === 1
				? theme.rawColors?.primary
				: theme.rawColors?.background,
	};

	const downButtonStyle = {
		bg: (theme) =>
			userVoteDirection === -1
				? theme.rawColors?.secondary
				: theme.rawColors?.background,
	};

	return (
		<div sx={style.root}>
			<button
				onClick={handleClickUp}
				disabled={isLoading}
				sx={{
					...style.button,
					...upButtonStyle,
				}}
			>
				<div sx={ringStyleUp} />
				<ThumbIcon sx={iconStyleUp} />
			</button>
			{isCounterVisible && <div sx={style.counter}>{totalScore}</div>}
			{isLoading && <div sx={style.counter}>-</div>}
			<button
				onClick={handleClickDown}
				disabled={isLoading}
				sx={{
					...style.button,
					...downButtonStyle,
				}}
			>
				<div sx={ringStyleDown} />
				<div style={{ transform: "rotate(180deg)" }}>
					<ThumbIcon sx={iconStyleDown} />
				</div>
			</button>
		</div>
	);
};
