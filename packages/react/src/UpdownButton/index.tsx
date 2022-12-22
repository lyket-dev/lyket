import React, { FC, useCallback, useContext, useState } from "react";
import { ClientContext } from "../contexts/ClientContext";
import { useSafeEffect } from "../hooks/useSafeEffect";
import { Simple } from "./templates/Simple";
import { Chevron } from "./templates/Chevron";
import { Reddit } from "./templates/Reddit";
import { camelizeKeys } from "humps";

const templates = {
	Simple,
	Chevron,
	Reddit,
};

export interface UpdownButtonTemplateComponentProps {
	isLoading: boolean;
	userVoteDirection: number | undefined;
	totalScore: number | undefined;
	handlePressUp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handlePressDown: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isCounterVisible: boolean;
}

type CallbackProps = Components.Schemas.UpdownButton["data"];

export interface UpdownButtonProps {
	id: string;
	namespace?: string;
	hideCounterIfLessThan?: number;
	onLoad?: (props: CallbackProps) => void;
	onPressUp?: (props: CallbackProps) => void;
	onPressDown?: (props: CallbackProps) => void;
	children?: (
		props: UpdownButtonTemplateComponentProps,
	) => React.ReactElement<any, any> | null;
	component?: React.FC<UpdownButtonTemplateComponentProps>;
}

type FCWithTemplates<Props> = FC<Props> & {
	templates: {
		Simple: React.FC<UpdownButtonTemplateComponentProps>;
		Chevron: React.FC<UpdownButtonTemplateComponentProps>;
		Reddit: React.FC<UpdownButtonTemplateComponentProps>;
	};
};

const UpdownButton: FCWithTemplates<UpdownButtonProps> = ({
	id,
	namespace,
	hideCounterIfLessThan,
	children,
	component,
	onLoad,
	onPressUp,
	onPressDown,
}) => {
	const client = useContext(ClientContext);

	const [response, setResponse] = useState<
		Components.Schemas.UpdownButton["data"] | null
	>(null);

	useSafeEffect(async () => {
		try {
			if (client) {
				const result = await client.updownButtons.info({ id, namespace });
				setResponse(result.data);

				if (onLoad) {
					onLoad(camelizeKeys(result.data));
				}
			}
		} catch (error) {
			console.error("Lyket error:", error?.errors[0].message);
			throw error;
		}
	}, [client, id, namespace, onLoad]);

	const handlePressUp = useCallback(
		async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();

			try {
				if (client) {
					const result = await client.updownButtons.pressUp({
						id,
						namespace,
					});
					setResponse(result.data);

					if (onPressUp) {
						onPressUp(camelizeKeys(result.data));
					}
				}
			} catch (error) {
				console.error("Lyket error:", error?.errors[0].message);
				throw error;
			}
		},
		[client, id, namespace, onPressUp],
	);

	const handlePressDown = useCallback(
		async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();

			try {
				if (client) {
					const result = await client.updownButtons.pressDown({
						id,
						namespace,
					});
					setResponse(result.data);

					if (onPressDown) {
						onPressDown(camelizeKeys(result.data));
					}
				}
			} catch (error) {
				console.error("Lyket error:", error?.errors[0].message);
				throw error;
			}
		},
		[client, id, namespace, onPressDown],
	);

	let isCounterVisible = true;

	if (
		!response ||
		(hideCounterIfLessThan &&
			response &&
			response.attributes.total_score < hideCounterIfLessThan)
	) {
		isCounterVisible = false;
	}

	const props = {
		isLoading: !response,
		totalScore: response?.attributes.total_score || 0,
		userVoteDirection: response?.attributes.user_vote_direction || 0,
		handlePressUp,
		handlePressDown,
		isCounterVisible,
	};

	if (children) {
		return children(props);
	}

	const Component = component || Simple;

	return <Component {...props} />;
};

UpdownButton.templates = templates;

export { UpdownButton };
