import React from "react";
import { createRoot } from "react-dom/client";
import { Simple, Twitter } from "../stories/LikeButton.stories";

describe("LikeButton", () => {
	it("renders without crashing", () => {
		const rootElement = document.createElement("div");
		const root = createRoot(rootElement);
		root.render(<Simple />);
	});
	it("renders without crashing", () => {
		const rootElement = document.createElement("div");
		const root = createRoot(rootElement);
		root.render(<Twitter />);
	});
});
