import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { NiceButton } from "./NiceButton";
import { NiceDialog, NiceDialogBody, NiceDialogFooter } from "./NiceDialog";

export default {
  title: "Nice/NiceDialog",
  component: NiceDialog,
} as ComponentMeta<typeof NiceDialog>;

const Template: ComponentStory<typeof NiceDialog> = (args) => (
  <NiceDialog {...args} />
);

export const Basic: ComponentStory<typeof NiceDialog> = (args) => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState("");

  return (
    <>
      <NiceButton onClick={() => setVisible(true)}>Open</NiceButton>
      <p>Result: {result}</p>
      <NiceDialog
        onClose={() => {
          setResult("close");
          setVisible(false);
        }}
        description="Nice dialog"
        title={args.title}
        visible={visible}
      >
        <NiceDialogBody>
          <p>Are you OK?</p>
        </NiceDialogBody>
        <NiceDialogFooter>
          <NiceButton
            onClick={() => {
              setResult("Cancel");
              setVisible(false);
            }}
          >
            Cancel
          </NiceButton>
          <NiceButton
            onClick={() => {
              setResult("OK");
              setVisible(false);
            }}
          >
            OK
          </NiceButton>
        </NiceDialogFooter>
      </NiceDialog>
    </>
  );
};
Basic.args = {
  title: "Nice dialog",
};
