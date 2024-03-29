/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { RateButtonTemplateComponentProps } from "../..";
import { Icon } from "./icons/Icon";
import { FC } from "react";
import { Base } from "../Base";

export const Star: FC<RateButtonTemplateComponentProps> = ({ ...props }) => {
	return (
		<Base
			{...props}
			Icon={Icon}
			iconColor={{ active: "rgb(249, 199, 61)", inactive: "#e6e6e6" }}
		/>
	);
};
