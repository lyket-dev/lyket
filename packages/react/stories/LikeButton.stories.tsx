import * as React from "react";
import { LikeButton } from "../src";
import { Provider, ThemedProvider } from "./utils/testProvider";

export default {
	title: "LikeButton",
};

export const Simple = () => (
	<>
		<Provider>
			<div
				style={{
					fontSize: "30px",
					marginRight: "50px",
					display: "inline",
					fontFamily: "Papyrus",
				}}
			>
				<LikeButton id="simple-example-f" namespace="stories" />
			</div>
			<div style={{ marginTop: "20px", fontSize: "30px" }}>
				<LikeButton id="simple-example-s" namespace="stories" />
			</div>
		</Provider>
		<ThemedProvider>
			<div style={{ marginTop: "20px", fontSize: "40px" }}>
				<LikeButton id="simple-example" namespace="stories" />
			</div>
		</ThemedProvider>
	</>
);

export const Chevron = () => (
	<>
		<Provider>
			<div style={{ marginBottom: "50px", fontSize: "20px" }}>
				<LikeButton
					id="chevron-example"
					namespace="stories"
					component={LikeButton.templates.Chevron}
				/>
			</div>
			<div style={{ marginBottom: "50px", fontSize: "40px" }}>
				<LikeButton
					id="chevron-example-med"
					namespace="stories"
					component={LikeButton.templates.Chevron}
				/>
			</div>
		</Provider>
		<ThemedProvider>
			<div style={{ marginBottom: "50px", fontSize: "80px" }}>
				<LikeButton
					id="chevron-example-big"
					namespace="stories"
					component={LikeButton.templates.Chevron}
					hideCounterIfLessThan={1}
				/>
			</div>
		</ThemedProvider>
	</>
);

const onLoad = async (data) => {
	const foo = new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 250);
	});

	console.log("response", await foo);
};

const onPress = (button) => {
	if (button.attributes.userHasLiked) {
		alert("Thanks for your support 🥳");
	} else {
		alert("Why the change of mind? 🧐");
	}
};

export const Twitter = () => (
	<Provider>
		<>
			<LikeButton
				id="twitter-example-small"
				namespace="stories"
				onLoad={onLoad}
				onPress={onPress}
				component={LikeButton.templates.Twitter}
			/>
			<div style={{ marginBottom: "50px", fontSize: "20px" }}>
				<LikeButton
					id="twitter-example-med"
					namespace="stories"
					component={LikeButton.templates.Twitter}
				/>
			</div>
			<div style={{ marginBottom: "50px", fontSize: "30px" }}>
				<LikeButton
					id="twitter-example-big"
					namespace="stories"
					component={LikeButton.templates.Twitter}
				/>
			</div>
		</>
	</Provider>
);

export const Heart = () => (
	<>
		<Provider>
			<div style={{ marginBottom: "50px", fontSize: "20px" }}>
				<LikeButton
					id="twitter-example-small"
					namespace="stories"
					onLoad={onLoad}
					onPress={onPress}
					component={LikeButton.templates.Heart}
				/>
			</div>
		</Provider>
		<ThemedProvider>
			<div style={{ marginBottom: "50px", fontSize: "50px" }}>
				<LikeButton
					id="Heart-example-med"
					namespace="stories"
					component={LikeButton.templates.Heart}
				/>
			</div>
			<div style={{ marginBottom: "50px", fontSize: "90px" }}>
				<LikeButton
					id="Heart-example-big"
					namespace="stories"
					component={LikeButton.templates.Heart}
				/>
			</div>
		</ThemedProvider>
	</>
);

export const Custom = () => (
	<Provider>
		<LikeButton
			id="custom-button"
			namespace="stories"
			onLoad={onLoad}
			onPress={onPress}
		>
			{({
				handlePress,
				totalLikes,
				userLiked,
				isLoading,
				isCounterVisible,
			}) => (
				<>
					<button onClick={handlePress} disabled={isLoading}>
						Of course! 🍕🍕🍕
					</button>
					{isCounterVisible && <div>Total: {totalLikes}</div>}
					{userLiked && <div>Thanks for your vote!</div>}
				</>
			)}
		</LikeButton>
	</Provider>
);
