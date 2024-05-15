import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Modal>;

type Story = StoryObj<Modal>;

const children = (
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elBeatae, expedita
        fuga laudantium mollitia nesciunt quam quasquia rerum sit soluta
    </div>
);

export const Primary: Story = {
    args: {
        isOpen: true,
        children,
    },
};

export default meta;
