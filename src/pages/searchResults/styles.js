import styled from "styled-components";
import { Link } from "react-router-dom";
import { baseButton } from "../../shared/styles";

const LINK = {};

LINK.BackHome = styled(Link)`
  ${baseButton}
  &:link {
    color: black;
  }
  &:hover {
    color: #48b19b;
  }
  width: 10rem;
`;

export { LINK };
