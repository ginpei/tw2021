import { ChangeEventHandler, FormEventHandler } from "react";
import { PureMessage, PureMessageHandler } from "../../data/message";
import { NiceButton } from "../form/NiceButton";

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
    <form className="MessageForm" onSubmit={onFormSubmit}>
      <label className="label">
        Message
        <textarea
          name="body"
          onChange={onInputChange}
          value={message.body}
        ></textarea>
      </label>
      <p>
        <NiceButton>Submit</NiceButton>
      </p>
    </form>
  );
};
