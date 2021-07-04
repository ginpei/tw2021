import { Link } from "react-router-dom";
import styled from "styled-components";

export const ModerateLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
