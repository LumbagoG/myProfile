// Импорты
import { lazy, Suspense } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

// Layouts
import AppLayout from "../layouts/AppLayout";

const HomePage = lazy(() => import("../pages/home/HomePage"));

/**
 * Гавный роут приложения
 * @returns {JSX.Element}
 * @constructor
 */
export const MainRoutes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        )
    );

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <RouterProvider router={router} />
        </Suspense>
    );
};
