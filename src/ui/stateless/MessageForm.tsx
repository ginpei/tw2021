import { ChangeEventHandler, FormEventHandler } from "react";
import styled from "styled-components";
import { PureMessage, PureMessageHandler } from "../../data/message";
import { FlexBlocks } from "../form/FlexBlocks";
import { NiceButton } from "../form/NiceButton";
import { NiceLabel } from "../form/NiceLabel";
import { NiceTextarea } from "../form/NiceTextarea";

export const MessageForm: React.FC<{
  message: PureMessage;
  onChange: PureMessageHandler;
  onSubmit: PureMessageHandler;
}> = ({ message, onChange, onSubmit }) => {
  const onInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "body") {
      onChange({ ...message, [name]: value });
      return;
    }

    throw new Error(`Unknown name: ${name}`);
  };

  const onFormSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSubmit(message);
  };

  return (
    <Frame className="MessageForm" onSubmit={onFormSubmit}>
      <FlexBlocks>
        <NiceLabel>
          Message
          <NiceTextarea
            height="3rem"
            name="body"
            onChange={onInputChange}
            value={message.body}
          />
        </NiceLabel>
        <NiceButton>Submit</NiceButton>
      </FlexBlocks>
    </Frame>
  );
};

const Frame = styled.form`
  border: var(--box-border-width) solid var(--box-border-color);
  padding: 1rem;
`;
