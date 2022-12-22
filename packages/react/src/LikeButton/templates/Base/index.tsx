/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { LikeButtonTemplateComponentProps } from "../..";
import { keyframes } from "@emotion/react";
import { FC, useCallback, useState } from "react";
import { style } from "./style";

interface BaseLikeButtonProps extends LikeButtonTemplateComponentProps {
	Icon: ({
		className,
	}: {
		className?: string;
	}) => JSX.Element;
}

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

export const Base: FC<BaseLikeButtonProps> = ({
	isLoading,
	userLiked,
	totalLikes,
	handlePress,
	isCounterVisible,
	Icon,
}) => {
	const [animationActive, setAnimationActive] = useState<boolean>(false);

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			handlePress(e);

			if (!userLiked) {
				setAnimationActive(true);
				setTimeout(() => setAnimationActive(false), ICON.durationMs);
			}
		},
		[userLiked, handlePress],
	);

	const iconStyle = {
		...style.icon,
		...{
			animation: animationActive
				? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
				: null,
		},
	};

	const ringStyle = {
		...style.ring,
		...{
			animation: animationActive
				? `${RING.animation} ${RING.durationMs}ms ease forwards`
				: null,
		},
	};

	const buttonStyle = {
		bg: (theme) =>
			userLiked ? theme.rawColors?.primary : theme.rawColors?.background,
	};

	return (
		<div sx={style.root}>
			<button
				onClick={handleClick}
				disabled={isLoading}
				sx={{
					...style.button,
					...buttonStyle,
				}}
			>
				<div sx={ringStyle} />
				<Icon sx={iconStyle} />
			</button>
			{isCounterVisible && <div sx={style.counter}>{totalLikes}</div>}
		</div>
	);
};
