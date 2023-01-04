/**
 * @jest-environment jsdom
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { Simple, Medium } from "../stories/ClapButton.stories";

describe("ClapButton", () => {
	it("renders without crashing", () => {
		const rootElement = document.createElement("div");
		const root = createRoot(rootElement);
		root.render(<Simple />);
	});
	it("renders without crashing", () => {
		const rootElement = document.createElement("div");
		const root = createRoot(rootElement);
		root.render(<Medium />);
	});
});
