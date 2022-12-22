import React from "react";

interface Props {
	className?: string;
}

export const Icon = ({ className }: Props) => (
	<svg
		version="1.1"
		viewBox="0 0 1200 1200"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path
			d="m600 158.93c-62.824-71.18-154.74-116.07-257.14-116.07-189.35 0-342.86 153.5-342.86 342.86v1.1562c0 231.78 199.52 488.54 598.56 770.27 354.02-252.97 551.38-483.47 592.07-691.51 6.1211-25.641 9.3633-52.402 9.3633-79.922 0-189.36-153.5-342.86-342.86-342.86-102.4 0-194.32 44.895-257.14 116.07z"
			fillRule="evenodd"
		/>
	</svg>
);
