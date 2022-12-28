import * as React from "react";
import { RateButton } from "../src";
import { Provider, ThemedProvider } from "./utils/testProvider";

export default {
	title: "RateButton",
};

const onLoad = async (data) => {
	const foo = new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 250);
	});

	console.log("response", await foo);
};

const onPress = (button) => {
	if (button.attributes.userRating > 3) {
		console.log(
			`Thanks for your ${button.attributes.userRating} stars rating! 🥳`,
		);
	} else if (button.attributes.userRating > 0) {
		console.log(`You rated ${button.attributes.userRating} stars :(`);
	}
};

export const Simple = () => {
	const [rerender, setRerender] = React.useState(true);
	return (
		<>
			<Provider>
				<div style={{ marginTop: "20px", fontSize: "20px" }}>
					<RateButton
						showRating="user"
						id="simple-example-f"
						namespace="stories"
						onPress={onPress}
					/>
					{rerender && <RateButton id="simple-example-f" namespace="stories" />}
				</div>
				<div style={{ marginTop: "20px", fontSize: "30px" }}>
					<RateButton
						showRating="user"
						id="simple-example-s"
						namespace="stories"
						onPress={onPress}
					/>
					{rerender && <RateButton id="simple-example-s" namespace="stories" />}
				</div>
			</Provider>
			<ThemedProvider>
				<div style={{ marginTop: "20px", fontSize: "40px" }}>
					<RateButton showRating="user" id="themed" namespace="stories" />
					<RateButton id="themed" namespace="stories" />
				</div>
				<div style={{ marginTop: "20px", fontSize: "18px" }}>
					<RateButton
						id="custom-button"
						namespace="stories"
						onLoad={onLoad}
						onPress={onPress}
					>
						{({
							handlePress,
							averageRating,
							userRating,
							isLoading,
							totalVotes,
						}) => (
							<>
								{Array.from(Array(5).keys()).map((index) => {
									if (userRating > index) {
										return (
											<button
												onClick={() => handlePress(index + 1)}
												disabled={isLoading}
											>
												❤️
											</button>
										);
									} else {
										return (
											<button
												onClick={() => handlePress(index + 1)}
												disabled={isLoading}
											>
												💔
											</button>
										);
									}
								})}
								<div>Your rating: {userRating}</div>
								<div>Average rating: {averageRating} stars out of 5</div>
								<div>Total votes: {totalVotes}</div>
							</>
						)}
					</RateButton>
				</div>
			</ThemedProvider>
		</>
	);
};
