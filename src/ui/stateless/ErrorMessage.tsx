import { useEffect } from "react";
import styled from "styled-components";
import { assureError } from "../../misc/util";

export const ErrorMessage: React.FC<{ error: unknown }> = ({ error }) => {
  const errorMessage = assureError(error).message;

  useEffect(() => {
    if (error === undefined || error === null) {
      return;
    }

    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return <Frame className="ErrorMessage">{errorMessage}</Frame>;
};

const Frame = styled.div`
  background-color: #fee;
  border-radius: var(--box-border-radius);
  border: thin solid currentcolor;
  color: #833;
  padding: 1rem;
`;
