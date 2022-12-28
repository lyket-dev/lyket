import React, { useState, useContext, createContext } from "react";

type Dispatch = React.Dispatch<React.SetStateAction<{}>>;
type State = Record<string, number>;
type RatingProviderProps = { children: React.ReactNode };

const RatingContext = createContext<
	{ registeredButtons: State; forceUpdate: Dispatch } | undefined
>(undefined);

const RatingProvider = ({ children }: RatingProviderProps) => {
	const [registeredButtons, forceUpdate] = useState({});
	const value = { registeredButtons, forceUpdate };
	return (
		<RatingContext.Provider value={value}>{children}</RatingContext.Provider>
	);
};

const useForceUpdate = () => {
	const context = useContext(RatingContext);
	if (context === undefined) {
		throw new Error("useForceUpdate must be used within a RatingProvider");
	}
	return context;
};

export { RatingProvider, useForceUpdate };
