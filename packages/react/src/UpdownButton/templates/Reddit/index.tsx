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

	const upButtonStyle = {
		svg: {
			fill: userVoteDirection === 1 ? "#cc3700" : "#25252550",
		},
		// fill: (theme) => {
		// 	return userVoteDirection === 1 ? "#cc3700" : "#25252550";
		// if (theme.rawColors?.primary && theme.rawColors?.icon) {
		// 	return userVoteDirection === 1
		// 		? theme.rawColors?.primary
		// 		: theme.rawColors?.icon;
		// }
	};

	const downButtonStyle = {
		transform: "rotate(180deg)",
		svg: {
			fill: userVoteDirection === -1 ? "#5a75cc" : "#25252550",
			// FIXME at the moment the component cannot know if the theme is custom
			// fill: (theme) => {
			// if (theme.rawColors?.secondary && theme.rawColors?.icon) {
			// 	return userVoteDirection === -1
			// 		? theme.rawColors?.secondary
			// 		: theme.rawColors?.icon;
			// }
		},
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
				<RedditArrow sx={iconStyleUp} />
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
				<RedditArrow sx={iconStyleDown} />
			</button>
		</div>
	);
};
