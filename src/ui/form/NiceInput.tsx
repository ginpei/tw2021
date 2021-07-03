import React, { useCallback } from "react";
import styled from "styled-components";
import { StyledComponentProps } from "../../misc/util";

type NiceInputProps = StyledComponentProps<"input">;

export const NiceInput: React.FC<NiceInputProps> = ({ onFocus, ...props }) => {
  const onElementFocus: React.FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (onFocus) {
        onFocus(event);
        return;
      }

      const el = event.currentTarget;
      if (el instanceof HTMLInputElement) {
        el.select();
      }
    },
    [onFocus]
  );
  return <NiceInputElement onFocus={onElementFocus} {...props} />;
};

const NiceInputElement = styled.input``;
