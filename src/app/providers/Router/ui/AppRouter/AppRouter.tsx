import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/router/routeConfig";
import { LoadingPage } from "@/pages/LoadingPage";

export const AppRouter = () => {
    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route element={element} path={path} key={path} />
                ))}
            </Routes>
        </Suspense>
    );
};
