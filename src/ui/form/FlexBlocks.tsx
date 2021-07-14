import styled from "styled-components";

export interface FlexBlocksProps {
  direction?: "column" | "row";
}

export const FlexBlocks = styled.div<FlexBlocksProps>`
  display: flex;
  flex-direction: ${(p) => p.direction ?? "column"};
  gap: 1rem;
`;
