import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Root from "../src/pages/Root";
import ErrorPage from "../src/pages/components/ErrorPage";
import SingleFood from "../src/pages/SingleFood/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Root />,
            },
            {
                path: "/food/:slug",
                element: <SingleFood />,
            },
        ],
    },
]);

export default router;
