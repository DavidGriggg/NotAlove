import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { EditableProfileCard } from "@/features/EditableProfileCard";
import { Flex } from "@/shared/ui/Flex";
import { Page } from "@/shared/ui/Page";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page
            className={classNames("", {}, [className])}
            data-testid="ProfilePage"
        >
            <Flex direction="column" gap="16" max>
                <EditableProfileCard id={id} />
            </Flex>
        </Page>
    );
};

export default ProfilePage;
