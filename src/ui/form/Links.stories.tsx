import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModerateLink } from "./Links";

export default {
  title: "Nice/ModerateLink",
  component: ModerateLink,
} as ComponentMeta<typeof ModerateLink>;

export const Basics: ComponentStory<typeof ModerateLink> = () => (
  <div>
    <p>
      <a href="#">This is an ordinary link</a>
    </p>
    <p>
      <ModerateLink href="#">This is actually a link</ModerateLink>
    </p>
  </div>
);
