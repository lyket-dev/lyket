import React, { FC, useCallback, useContext, useState } from "react";
import { ClientContext } from "../contexts/ClientContext";
import { useSafeEffect } from "../hooks/useSafeEffect";
import { Custom } from "./templates/Custom";
import { Heart } from "./templates/Heart";
import { Star } from "./templates/Star";
import { camelizeKeys } from "humps";
import { useForceUpdate } from "../contexts/RatingContext";

const templates = {
	Custom,
	Heart,
	Star,
};

export interface RateButtonTemplateComponentProps {
	isLoading: boolean;
	userRating: number;
	averageRating: number;
	totalVotes: number;
	handlePress: (rating: number) => void;
	isCounterVisible: boolean;
	showRating?: "average" | "user";
	totalReviewsLabel?: string;
}

type CallbackProps = Components.Schemas.RateButton["data"];

export interface RateButtonProps {
	id: string;
	namespace?: string;
	hideCounterIfLessThan?: number;
	showRating?: "average" | "user";
	totalReviewsLabel?: string;
	onLoad?: (props: CallbackProps) => void;
	onPress?: (props: CallbackProps) => void;
	children?: (
		props: RateButtonTemplateComponentProps,
	) => React.ReactElement<any, any> | null;
	component?: React.FC<RateButtonTemplateComponentProps>;
}

type FCWithTemplates<Props> = FC<Props> & {
	templates: {
		Custom: React.FC<RateButtonTemplateComponentProps>;
		Heart: React.FC<RateButtonTemplateComponentProps>;
		Star: React.FC<RateButtonTemplateComponentProps>;
	};
};

const RateButton: FCWithTemplates<RateButtonProps> = ({
	id,
	namespace,
	hideCounterIfLessThan,
	showRating,
	children,
	component,
	onLoad,
	onPress,
}) => {
	const client = useContext(ClientContext);
	const { registeredButtons, forceUpdate } = useForceUpdate();
	const rateButtonId = `${namespace || "no-namespace"}:${id}`;
	const shouldUpdate = registeredButtons[rateButtonId];

	const [response, setResponse] = useState<
		Components.Schemas.RateButton["data"] | null
	>(null);

	useSafeEffect(async () => {
		if (!client) {
			return;
		}

		try {
			const result = await client.rateButtons.info({ id, namespace });
			setResponse(result.data);

			if (onLoad) {
				onLoad(camelizeKeys(result.data));
			}
		} catch (error) {
			console.error("Lyket error:", error?.errors[0].message);
			throw error;
		}
	}, [client, id, namespace, onLoad, setResponse, shouldUpdate]);

	const handlePress = useCallback(
		async (rating: number) => {
			if (!client) {
				return;
			}

			try {
				const result = await client.rateButtons.press({
					id,
					namespace,
					rating,
				});

				setResponse(result.data);
				forceUpdate({ ...registeredButtons, [rateButtonId]: {} });

				if (onPress) {
					onPress(camelizeKeys(result.data));
				}
			} catch (error) {
				console.error("Lyket error:", error?.errors[0].message);
				throw error;
			}
		},
		[client, id, namespace, onPress, setResponse, shouldUpdate],
	);

	let isCounterVisible = true;

	if (
		!response ||
		(hideCounterIfLessThan &&
			response &&
			response.attributes.average_rating < hideCounterIfLessThan)
	) {
		isCounterVisible = false;
	}

	const props = {
		showRating,
		isLoading: !response,
		totalVotes: response?.attributes.total_votes || 0,
		averageRating: response?.attributes.average_rating || 0,
		userRating: response?.attributes.user_rating,
		handlePress,
		isCounterVisible,
	};

	if (children) {
		return children(props);
	}

	const Component = component || Star;

	return <Component {...props} />;
};

RateButton.templates = templates;

export { RateButton };
