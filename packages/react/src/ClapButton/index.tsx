import React, { FC, useCallback, useContext, useState } from "react";
import { ClientContext } from "../contexts/ClientContext";
import { useSafeEffect } from "../hooks/useSafeEffect";
import { Simple } from "./templates/Simple";
import { Heart } from "./templates/Heart";
import { Medium } from "./templates/Medium";
import { camelizeKeys } from "humps";

const templates = {
	Simple,
	Medium,
	Heart,
};

export interface ClapButtonTemplateComponentProps {
	isLoading: boolean;
	userClaps: number | undefined;
	totalClaps: number | undefined;
	handlePress: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isCounterVisible: boolean;
}

type CallbackProps = Components.Schemas.ClapButton["data"];

export interface ClapButtonProps {
	id: string;
	namespace?: string;
	hideCounterIfLessThan?: number;
	onLoad?: (props: CallbackProps) => void;
	onPress?: (props: CallbackProps) => void;
	children?: (
		props: ClapButtonTemplateComponentProps,
	) => React.ReactElement<any, any> | null;
	component?: React.FC<ClapButtonTemplateComponentProps>;
}

type FCWithTemplates<Props> = FC<Props> & {
	templates: {
		Simple: React.FC<ClapButtonTemplateComponentProps>;
		Medium: React.FC<ClapButtonTemplateComponentProps>;
		Heart: React.FC<ClapButtonTemplateComponentProps>;
	};
};

const ClapButton: FCWithTemplates<ClapButtonProps> = ({
	id,
	namespace,
	hideCounterIfLessThan,
	children,
	component,
	onLoad,
	onPress,
}) => {
	const client = useContext(ClientContext);

	const [response, setResponse] = useState<
		Components.Schemas.ClapButton["data"] | null
	>(null);

	useSafeEffect(async () => {
		try {
			if (client) {
				const result = await client.clapButtons.info({ id, namespace });
				setResponse(result.data);

				if (onLoad) {
					onLoad(camelizeKeys(result.data));
				}
			}
		} catch (error) {
			console.error("Lyket error:", error.errors[0].message);
			throw error;
		}
	}, [client, id, namespace, setResponse]);

	const handlePress = useCallback(
		async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();

			try {
				if (client) {
					const result = await client.clapButtons.press({ id, namespace });
					setResponse(result.data);

					if (onPress) {
						onPress(camelizeKeys(result.data));
					}
				}
			} catch (error) {
				console.error("Lyket error:", error.errors[0].message);
				throw error;
			}
		},
		[client, id, namespace, onPress],
	);

	let isCounterVisible = true;

	if (
		!response ||
		(hideCounterIfLessThan &&
			response &&
			response.attributes.total_claps < hideCounterIfLessThan)
	) {
		isCounterVisible = false;
	}

	const props = {
		isLoading: !response,
		totalClaps: response?.attributes.total_claps || 0,
		userClaps: response?.attributes.user_claps || 0,
		handlePress,
		isCounterVisible,
	};

	if (children) {
		return children(props);
	}

	const Component = component || Simple;

	return <Component {...props} />;
};

ClapButton.templates = templates;

export { ClapButton };
