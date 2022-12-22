import React from "react";

interface Props {
	className?: string;
}

export const ChevronIcon = ({ className }: Props) => (
	<svg
		className={className}
		version="1.1"
		viewBox="0 100 1200 1200"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="m79.965 909.7c-18.34 18.211-48.031 18.211-66.242 0-18.34-18.34-18.34-47.898 0-66.242l553.16-553.16c18.34-18.34 47.898-18.34 66.242 0l553.16 553.16c18.34 18.34 18.34 47.898 0 66.242-18.211 18.211-47.898 18.211-66.242 0l-520.04-520.04z"
			fillRule="evenodd"
		/>
	</svg>
);
