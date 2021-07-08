import styled from "styled-components";
import { assureError } from "../../misc/util";

export const ErrorMessage: React.FC<{ error: unknown }> = ({ error }) => {
  const errorMessage = assureError(error).message;

  return <Frame className="ErrorMessage">{errorMessage}</Frame>;
};

const Frame = styled.div`
  background-color: #fee;
  border-radius: var(--box-border-radius);
  border: thin solid currentcolor;
  color: #833;
  padding: 1rem;
`;
