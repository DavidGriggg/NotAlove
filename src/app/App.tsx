import { memo, Suspense } from "react";
import { AppRouter } from "./providers/Router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "../shared/hooks/useTheme/useTheme";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { Sidebar } from "@/widgets/Sidebar";
import { Header } from "@/widgets/Header";
import { LoadingPage } from "@/pages/LoadingPage";

const App = memo(() => {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<LoadingPage />}>
                <MainLayout
                    content={<AppRouter />}
                    header={<Header />}
                    sidebar={<Sidebar />}
                />
            </Suspense>
        </div>
    );
});

export default App;
