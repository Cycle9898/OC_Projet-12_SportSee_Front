import { createContext, useState } from "react";

type UserIDContextType = {
	userID: number;
	setUserID: (id: number) => void;
};

type Props = {
	children: JSX.Element;
};

export const UserIDContext = createContext<UserIDContextType | null>(null);

function ContextProvider({ children }: Props) {
	// Context related
	const [userID, setUserID] = useState(18);

	return (
		<UserIDContext.Provider value={{ userID, setUserID }}>
			{children}
		</UserIDContext.Provider>
	);
}

export default ContextProvider;
