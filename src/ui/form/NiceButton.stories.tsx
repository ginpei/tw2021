import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NiceButton } from "./NiceButton";

export default {
  title: "Nice/NiceButton",
  component: NiceButton,
} as ComponentMeta<typeof NiceButton>;

const Template: ComponentStory<typeof NiceButton> = (args) => (
  <NiceButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};
