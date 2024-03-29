/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { LikeButtonTemplateComponentProps } from "../..";
import { ThumbIcon } from "./icons/ThumbIcon";
import { FC } from "react";
import { Base } from "../Base";

export const Simple: FC<LikeButtonTemplateComponentProps> = ({ ...props }) => {
	return <Base {...props} Icon={ThumbIcon} />;
};
