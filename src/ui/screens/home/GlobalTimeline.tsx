import { useGlobalTimeline } from "../../../data/messageHooks";
import { ErrorMessage } from "../../stateless/ErrorMessage";
import { TimelineMessage } from "../../stateless/TimelineMessage";

export const GlobalTimeline: React.FC = () => {
  const [messages, error] = useGlobalTimeline();

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!messages) {
    return <>...</>;
  }

  return (
    <div className="GlobalTimeline">
      {messages.map((message) => (
        <TimelineMessage key={message.id} message={message} />
      ))}
    </div>
  );
};
