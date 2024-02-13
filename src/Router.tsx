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
			}
		]
	}
]);

function AppRouter() {
	return <RouterProvider router={router} />;
}

export default AppRouter;
