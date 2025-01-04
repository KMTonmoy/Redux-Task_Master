import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Task from "../pages/task";
import Users from "../pages/users";
import App from "@/App";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                index: true,
                element: <Task />,
            },
            {
                path: "/users",
                element: <Users />,
            },
        ]
    }

])

export default routes