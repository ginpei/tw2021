import { useGlobalTimeline } from "../../../data/messageResolvedHooks";
import { TimelineMessage } from "../../stateless/TimelineMessage";

export const GlobalTimeline: React.FC = () => {
  const [messages] = useGlobalTimeline();

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
