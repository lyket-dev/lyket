import React from "react";
import { createRoot } from "react-dom/client";
import { Simple, Reddit } from "../stories/UpdownButton.stories";

describe("UpdownButton", () => {
	it("renders without crashing", () => {
		const rootElement = document.createElement("div");
		const root = createRoot(rootElement);
		root.render(<Simple />);
	});
	it("renders without crashing", () => {
		const rootElement = document.createElement("div");
		const root = createRoot(rootElement);
		root.render(<Reddit />);
	});
});
