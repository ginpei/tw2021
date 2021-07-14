import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FlexBlocks } from "./FlexBlocks";

export default {
  title: "Nice/FlexBlocks",
  component: FlexBlocks,
} as ComponentMeta<typeof FlexBlocks>;

export const Basics: ComponentStory<typeof FlexBlocks> = () => (
  <FlexBlocks>
    <FlexBlocks direction="row">
      <span>1</span>
      <span>2</span>
    </FlexBlocks>
    <FlexBlocks direction="row">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit in,
        adipisci obcaecati dolores veniam ratione ipsa porro unde laborum
        perspiciatis soluta. Dolor harum aspernatur sunt exercitationem iusto
        dicta voluptas.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        natus sint perspiciatis totam, corrupti qui, quis possimus labore
        impedit adipisci vitae maxime accusamus rem error quo eligendi? Sequi,
        iusto voluptatum?
      </div>
    </FlexBlocks>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ratione
      error ullam reprehenderit id voluptate hic delectus quidem. Labore ad sint
      praesentium consequatur ut odit voluptas dolorem expedita asperiores
      sapiente!
    </div>
    <div>
      Quas corrupti aspernatur blanditiis aliquam, perspiciatis deleniti
      voluptatum! Suscipit molestiae nam expedita laudantium earum harum sequi
      sed explicabo quam? Totam non illum harum ex nam maxime rerum sit possimus
      minus!
    </div>
  </FlexBlocks>
);
