import { memo, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppRouter } from "./providers/Router";
import { getUserAuthData, userActions } from "../entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/hooks/useTheme/useTheme";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { Sidebar } from "@/widgets/Sidebar";
import { Header } from "@/widgets/Header";
import { LoadingPage } from "@/pages/LoadingPage";

const App = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserAuthData);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<LoadingPage />}>
                <MainLayout
                    content={<AppRouter />}
                    header={<Header />}
                    sidebar={<Sidebar userId={userData?.id} />}
                />
            </Suspense>
        </div>
    );
});

export default App;
