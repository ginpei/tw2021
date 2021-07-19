import styled from "styled-components";
import { NiceButton } from "./NiceButton";

export const NicePrimaryButton = styled(NiceButton)`
  --button-bg: var(--theme-bg);
  --button-fg: var(--theme-fg);
  --button-border-color: var(--theme-bg);
  --button-shadow-focus: 0 0 1rem #fff6 inset;
`;
