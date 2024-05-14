import type { Meta, StoryObj } from "@storybook/react";
import { LangSwitcher } from "./LangSwitcher";

const meta = {
    title: "features/LangSwitcher",
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<LangSwitcher>;

type Story = StoryObj<LangSwitcher>;

export const Open: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ paddingTop: 250 }}>
                <Story />
            </div>
        ),
    ],
};

export const Collapsed: Story = {
    args: {
        short: true,
    },
};

export default meta;
