import { memo } from "react";
import cls from "./LoadingPage.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Flex } from "@/shared/ui/Flex";
import { MainLayout } from "@/shared/layouts/MainLayout";

export const LoadingPage = memo(() => {
    return (
        <MainLayout
            header={
                <Flex direction="row" className={cls.header}>
                    <Skeleton width={40} height={40} borderRadius="50%" />
                </Flex>
            }
            content={
                <Flex direction="column" gap="16" style={{ height: "100%" }}>
                    <Skeleton width="70%" height={32} borderRadius="16px" />
                    <Skeleton width="40%" height={20} borderRadius="16px" />
                    <Skeleton width="50%" height={20} borderRadius="16px" />
                    <Skeleton width="30%" height={32} borderRadius="16px" />
                    <Skeleton width="80%" height="40%" borderRadius="16px" />
                    <Skeleton width="80%" height="40%" borderRadius="16px" />
                </Flex>
            }
            sidebar={<Skeleton borderRadius="32px" width={220} height="100%" />}
        />
    );
});
