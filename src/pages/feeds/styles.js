import styled from "styled-components";
import { colors } from "../../shared/consts/colors";

const Field = styled.input`
  box-shadow: 3px 3px 2px #888888;
  &::placeholder {
    font-weight: 700;
    font-size: 15px;
    color: #e5e5e5;
  }
  &:focus {
    box-shadow: 0 0 0 2px ${colors.tertiary};
    border: 1px solid ${colors.tertiary};
    outline: none;
`;

export { Field };
