/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { RateButtonTemplateComponentProps } from "../..";
import { StarIcon } from "./icons/StarIcon";
import { FC } from "react";
import { Base } from "../Base";

export const Simple: FC<RateButtonTemplateComponentProps> = ({ ...props }) => {
	return <Base {...props} Icon={StarIcon} />;
};
