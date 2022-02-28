import styled from "styled-components";
import { Link } from "react-router-dom";
import { baseButton } from "../../shared/styles";

const LINK = {};

LINK.BackHome = styled(Link)`
  ${baseButton}
  &:link {
    color: black;
  }
  width: 10rem;
`;

export { LINK };
