import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import UserPage from "./pages/UserPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "users/:userId",
                element: <UserPage />,
            }
        ],
    },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
        <RouterProvider router={router}/>
);
