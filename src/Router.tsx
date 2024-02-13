import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/profile",
		element: <ProfilePage />
	}
]);

function AppRouter() {
	return <RouterProvider router={router} />;
}

export default AppRouter;
