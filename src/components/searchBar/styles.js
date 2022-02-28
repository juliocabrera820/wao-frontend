import styled from "styled-components";
import { colors } from "../../shared/consts/colors";

const Field = styled.input`
  box-shadow: 4px 4px 3px #888888;
  &::placeholder {
    font-weight: 700;
    font-size: 15px;
    color: #e5e5e5;
    text-align: center;
  }
  &:focus {
    box-shadow: 0 0 0 2px ${colors.secondary};
    border: 1px solid ${colors.secondary};
    outline: none;
    text-indent: 20px;
  }
`;

export { Field };
