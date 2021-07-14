import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FlexBlocks } from "./FlexBlocks";
import { NiceInput } from "./NiceInput";
import { NiceLabel } from "./NiceLabel";
import { NiceTextarea } from "./NiceTextarea";

export default {
  title: "Nice/NiceLabel",
  component: NiceLabel,
} as ComponentMeta<typeof NiceLabel>;

export const Basics: ComponentStory<typeof NiceLabel> = () => (
  <NiceLabel>
    Nice name
    <NiceInput />
  </NiceLabel>
);

export const Align: ComponentStory<typeof NiceLabel> = () => (
  <FlexBlocks>
    <NiceLabel>
      Nice name
      <NiceInput />
    </NiceLabel>
    <NiceLabel>
      Nice comment
      <NiceTextarea />
    </NiceLabel>
    <NiceLabel>
      Nice type
      <NiceInput />
    </NiceLabel>
  </FlexBlocks>
);
