import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

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
