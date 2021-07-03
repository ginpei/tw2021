import { StyledComponentProps as StyledComponentPropsOrig } from "styled-components";

/**
 * @example
 * type StyledInputProps = StyledComponentProps<"input">;
 * const StyledInput = styled.input``;
 * const MyInput: React.VFC<StyledInputProps> = (props) => {
 *   return <input {...props} />;
 * }
 */
export type StyledComponentProps<T> = StyledComponentPropsOrig<
  "input",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  never
>;

export function sleep(ms: number): Promise<void> {
  return new Promise((f) => setTimeout(f, ms));
}
