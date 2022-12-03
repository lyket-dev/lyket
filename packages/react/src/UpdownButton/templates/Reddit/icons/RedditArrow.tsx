import React from "react";

interface Props {
	className?: string;
}

export const RedditArrow = ({ className }: Props) => (
	<svg
		version="1.1"
		viewBox="0 0 1200 1200"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path d="m1005.6 678-373.2-500.4c-16.801-22.801-50.398-22.801-67.199 0l-372 500.4c-20.398 27.602-1.1992 66 33.602 66h163.2v253.2c0 18 14.398 33.602 33.602 33.602h352.8c18 0 33.602-14.398 33.602-33.602l-0.003906-252h162c34.801 0 54-39.598 33.602-67.199z" />
	</svg>
);
