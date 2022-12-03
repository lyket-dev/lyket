import { ThemeUIStyleObject } from "@theme-ui/css";

export const style: Record<string, ThemeUIStyleObject> = {
	root: {
		color: "inherit",
		fontFamily: "inherit",
		display: "inline-flex",
		alignItems: "center",
	},
	counter: {
		ml: ".4em",
		fontFamily: "body",
		color: (theme) => theme.rawColors?.text,
	},
	icon: {
		height: "1.7em",
		display: "block",
		margin: "0 auto",
		backfaceVisibility: "hidden",
	},
	button: {
		border: "none !important",
		outline: "none !important",
		cursor: "pointer",
		background: "transparent",
		appearance: "none",
		position: "relative",
		fontSize: "inherit",
		borderRadius: "100% !important",
		transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		width: "3em !important",
		height: "3em !important",
		padding: "0 !important",
		lineHeight: "1em",
		"@media (hover: hover)": {
			":hover": {
				transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
				backgroundColor: "#E5214A20",
			},
		},
	},
	dotsRotContainer: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	dotsContainer: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%) rotate(165deg)",
	},
	ring: {
		opacity: "0",
		width: "90%",
		height: "90%",
		borderRadius: "3em",
		boxSizing: "border-box",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
};
