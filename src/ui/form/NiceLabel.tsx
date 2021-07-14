import styled from "styled-components";

export interface NiceLabelProps {
  direction?: "column" | "row";
}

export const NiceLabel = styled.label<NiceLabelProps>`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;
