export const observeMutations = (targetNode, handleMutation) => {
	// targetNode is the node that will be observed for mutations

	// Options for the observer (which mutations to observe)
	const config = { attributes: true };

	// Callback function to execute when mutations are observed
	const callback = function (mutationsList, _observer) {
		// Use traditional 'for loops' for IE 11
		for (const mutation of mutationsList) {
			if (mutation.type === "attributes") {
				handleMutation(mutation.attributeName);
			}
		}
	};

	// Create an observer instance linked to the callback function
	const observer = new MutationObserver(callback);

	// Start observing the target node for configured mutations
	observer.observe(targetNode, config);

	// Later, you can stop observing
	return () => observer.disconnect();
};
