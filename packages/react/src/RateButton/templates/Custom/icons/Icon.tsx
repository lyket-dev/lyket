import React from "react";

interface Props {
	className?: string;
}

export const Icon = ({ className }: Props) => (
	<svg
		className={className}
		version="1.1"
		viewBox="0 0 1200 1200"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="m800 375 333.33 33.332c61.109 5.5547 88.891 83.332 38.891 127.78l-250 222.22 72.223 322.22c16.668 66.668-50 116.67-105.55 83.332l-288.89-172.22-288.89 172.22c-55.555 33.332-122.22-16.668-111.11-83.332l77.777-322.22-250-222.22c-50-44.445-27.777-122.22 38.891-127.78l333.33-33.332 133.33-305.55c22.223-61.109 111.11-61.109 133.33 0l133.33 305.55z"
			fillRule="evenodd"
		/>
	</svg>
);
