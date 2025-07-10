import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

const Route = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/product/:id',
                Component: ProductDetails
            }
        ]
    }
])

export default Route;