import { Dialog } from "@headlessui/react";
import { ReactElement } from "react";
import styled from "styled-components";

export interface NiceDialogProps {
  description: string;
  onClose: () => void;
  title?: string;
  visible: boolean;
}

export const NiceDialog: React.FC<NiceDialogProps> = ({
  children,
  description,
  onClose,
  title,
  visible,
}) => {
  return (
    <Dialog as={NiceDialogRoot} open={visible} onClose={onClose}>
      <Dialog.Overlay as={NiceDialogOverlay} />
      <NiceDialogFrame>
        <Dialog.Description as={NiceDialogDescription}>
          {description}
        </Dialog.Description>
        {title && <NiceDialogTitle>{title}</NiceDialogTitle>}
        {children}
      </NiceDialogFrame>
    </Dialog>
  );
};

export const NiceDialogTitle = styled(Dialog.Title)`
  background-color: var(--dialog-header-bg);
  border-radius: var(--box-border-radius) var(--box-border-radius) 0 0;
  color: var(--dialog-header-fg);
  font-size: 1rem;
  line-height: 1.5em;
  margin: 0;
  overflow: hidden;
  padding: 0 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NiceDialogBody = styled.div`
  max-height: var(--dialog-height-max);
  overflow: auto;
  padding: 1rem;
`;

export const NiceDialogFooter = styled.div`
  background-color: var(--dialog-footer-bg);
  color: var(--dialog-footer-fg);
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  overflow: auto;
  padding: 0.5rem 1rem;
`;

const NiceDialogRoot = styled.div`
  --dialog-bg: var(--base-bg);
  --dialog-border-color: white;
  --dialog-border-shadow: 0 0 1rem #0006;
  --dialog-fg: var(--base-fg);
  --dialog-footer-bg: #eee;
  --dialog-footer-fg: #333;
  --dialog-header-bg: var(--theme-bg);
  --dialog-header-fg: var(--theme-fg);
  --dialog-height-max: calc(60vh);
  --dialog-overlay-bg: #0003;
  --dialog-width: min(400px, calc(100% - 2rem));
  display: grid;
  inset: 0;
  place-items: center;
  position: fixed;
`;

const NiceDialogOverlay = styled.div`
  background-color: var(--dialog-overlay-bg);
  inset: 0;
  position: absolute;
`;

const NiceDialogFrame = styled.div`
  background-color: var(--dialog-bg);
  border-radius: var(--box-border-radius);
  border: thin solid var(--dialog-border-color);
  box-shadow: var(--dialog-border-shadow);
  color: var(--dialog-fg);
  position: absolute;
  width: var(--dialog-width);
`;

const NiceDialogDescription = styled.div`
  display: none;
`;
