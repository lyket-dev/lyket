/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { LikeButtonTemplateComponentProps } from "../..";
import { ChevronIcon } from "./icons/ChevronIcon";
import { FC } from "react";
import { Base } from "../Base";

export const Chevron: FC<LikeButtonTemplateComponentProps> = ({ ...props }) => {
	return <Base {...props} Icon={ChevronIcon} />;
};
