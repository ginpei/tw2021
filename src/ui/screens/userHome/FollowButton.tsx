import { useState } from "react";
import { NiceButton } from "../../form/NiceButton";
import {
  NiceDialog,
  NiceDialogBody,
  NiceDialogFooter,
  NiceDialogTitle,
} from "../../form/NiceDialog";

export const FollowButton: React.FC = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <NiceButton onClick={() => setVisible(true)}>Follow</NiceButton>
      <NiceDialog
        description="To follow"
        onClose={() => setVisible(false)}
        title="Follow"
        visible={visible}
      >
        <NiceDialogBody>
          <p>
            Are you sure you want to follow <strong>User @user</strong>?
          </p>
        </NiceDialogBody>
        <NiceDialogFooter>
          <NiceButton onClick={() => setVisible(false)}>Cancel</NiceButton>
          <NiceButton onClick={() => setVisible(false)}>Follow</NiceButton>
        </NiceDialogFooter>
      </NiceDialog>
    </>
  );
};
