import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Services from "../components/Services/Services";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Services></Services>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;