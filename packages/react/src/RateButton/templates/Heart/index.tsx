/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx } from "theme-ui";
import { LikeButtonTemplateComponentProps } from "../..";
import { Icon } from "./icons/Icon";
import { FC } from "react";
import { Base } from "../Base";

export const Heart: FC<LikeButtonTemplateComponentProps> = ({ ...props }) => {
	return <Base {...props} Icon={Icon} />;
};
