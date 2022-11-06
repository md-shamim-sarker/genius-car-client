import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Registration from "../components/Login/Registration";
import Orders from "../components/Orders/Orders";
import Services from "../components/Services/Services";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: "/orders",
                element: <Orders></Orders>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;