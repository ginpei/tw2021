import { CSSProperties } from "react";
import styled from "styled-components";

export interface NiceTextareaProps {
  height?: CSSProperties["height"];
}

export const NiceTextarea = styled.textarea<NiceTextareaProps>`
  height: ${(props) => props.height};
  width: 100%;
`;
