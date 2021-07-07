import React, { InputHTMLAttributes, useCallback } from "react";
import styled from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const NiceInput: React.FC<InputProps> = ({ onFocus, ...props }) => {
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
