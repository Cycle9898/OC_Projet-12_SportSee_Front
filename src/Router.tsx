import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import ContextProvider from "./utils/Context";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />
			},
			{
				path: "/profile",
				element: <ProfilePage />
			},
			{
				path: "/error",
				element: <ErrorPage />
			},
			{
				path: "/*",
				element: <Navigate to="/error" replace />
			}
		]
	}
]);

function AppRouter() {
	return (
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
	);
}

export default AppRouter;
