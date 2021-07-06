import Link from "next/link";
import styled from "styled-components";
import { StyledComponentProps } from "../../misc/util";

type LinkProps = StyledComponentProps<"a">;

export const ModerateLink: React.FC<{ href: string } & LinkProps> = (props) => {
  return (
    <Link href={props.href} passHref>
      <ModerateAElement {...props} />
    </Link>
  );
};

const ModerateAElement = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
