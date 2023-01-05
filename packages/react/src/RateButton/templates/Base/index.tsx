/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { RateButtonTemplateComponentProps } from "../..";
import { keyframes } from "@emotion/react";
import { FC, useCallback, useState } from "react";
import { style } from "./style";

interface BaseRateButtonProps extends RateButtonTemplateComponentProps {
	iconColor?: { active: string; inactive: string };
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

export const Base: FC<BaseRateButtonProps> = ({
	isLoading,
	userRating,
	averageRating,
	totalVotes,
	showRating = "average",
	totalReviewsLabel,
	handlePress,
	isCounterVisible,
	Icon,
	iconColor,
}) => {
	const [animationActive, setAnimationActive] = useState<boolean>(false);

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
			e.preventDefault();

			handlePress(index);

			if (!userRating) {
				setAnimationActive(true);
				setTimeout(() => setAnimationActive(false), ICON.durationMs);
			}
		},
		[userRating, handlePress],
	);

	const ringStyle = {
		...style.ring,
		...{
			animation: animationActive
				? `${RING.animation} ${RING.durationMs}ms ease forwards`
				: null,
		},
	};

	return (
		<div sx={style.root}>
			{Array.from(Array(5).keys()).map((index) => {
				const selectedRating =
					showRating === "average" ? averageRating : userRating;

				const currentRating = selectedRating === index + 1;

				let iconStyle = {
					...(selectedRating > index ? style.iconActive : style.icon),
					...(showRating === "user" &&
						currentRating && {
							animation: animationActive
								? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
								: null,
						}),
				};

				if (iconColor) {
					iconStyle = {
						...iconStyle,
						fill:
							selectedRating > index ? iconColor.active : iconColor.inactive,
					};
				}

				return (
					<button
						key={`${Icon.toString()}${index}`}
						onClick={(e) => handleClick(e, index + 1)}
						disabled={isLoading || showRating === "average"}
						sx={showRating === "user" ? style.button : style.buttonInactive}
					>
						{currentRating && <div sx={ringStyle} />}
						<Icon sx={iconStyle} className={`icon-${index}`} />
					</button>
				);
			})}

			{isCounterVisible && showRating === "average" && (
				<span sx={style.counter}>
					{totalVotes}{" "}
					{totalReviewsLabel || `review${totalVotes !== 1 ? "s" : ""}`}
				</span>
			)}
		</div>
	);
};
