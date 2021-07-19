import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { FlexBlocks } from "./FlexBlocks";
import { NiceButton } from "./NiceButton";
import { NicePrimaryButton } from "./NicePrimaryButton";

export default {
  title: "Nice/NicePrimaryButton",
  component: NicePrimaryButton,
} as ComponentMeta<typeof NicePrimaryButton>;

export const Basic: ComponentStory<typeof NicePrimaryButton> = (args) => {
  return (
    <FlexBlocks direction="row">
      <NicePrimaryButton>Primary</NicePrimaryButton>
      <NiceButton>Normal</NiceButton>
      <NiceButton>Normal</NiceButton>
    </FlexBlocks>
  );
};
Basic.args = {
  title: "Nice dialog",
};
