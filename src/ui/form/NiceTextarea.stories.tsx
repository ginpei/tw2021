import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NiceTextarea } from "./NiceTextarea";

export default {
  title: "Nice/NiceTextarea",
  component: NiceTextarea,
  argTypes: {
    height: { defaultValue: "10rem" },
  },
} as ComponentMeta<typeof NiceTextarea>;

export const Basics: ComponentStory<typeof NiceTextarea> = (args) => (
  <NiceTextarea {...args} />
);
