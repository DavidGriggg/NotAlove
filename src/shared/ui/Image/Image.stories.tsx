import type { Meta, StoryObj } from "@storybook/react";
import { AppImage as Image } from "./Image";
import AvatarImage from "@/shared/assets/images/avatar.webp";
import MissingImage from "@/shared/assets/images/no-image.png";
import { Skeleton } from "../Skeleton";

const meta = {
    title: "shared/Image",
    component: Image,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Image>;

type Story = StoryObj<Image>;

export const Loaded: Story = {
    args: {
        src: AvatarImage,
        style: { width: "200px", height: "200px" },
    },
};

export const Loading: Story = {
    args: {
        errorFallback: <Skeleton width={200} height={200} />,
    },
};

export const Error: Story = {
    args: {
        style: { width: "200px", height: "200px" },
        errorFallback: <Image src={MissingImage} />,
    },
};

export default meta;
