import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NiceInput } from "./NiceInput";

export default {
  title: "Nice/NiceInput",
  component: NiceInput,
} as ComponentMeta<typeof NiceInput>;

export const Basics: ComponentStory<typeof NiceInput> = () => (
  <NiceInput defaultValue="123" />
);
