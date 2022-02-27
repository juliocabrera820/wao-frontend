import styled, { css } from "styled-components";
import { colors, hoverColors } from "../../shared/consts/colors";

const baseButton = css`
  background-color: ${(props) => colors[props.buttonType]};
  border-color: ${(props) => colors[props.buttonType]};
  &:hover {
    background-color: ${(props) => hoverColors[props.buttonType]};
    border-color: ${(props) => hoverColors[props.buttonType]};
  }
`;

const Button = styled.button`
  ${baseButton}
`;

export { Button, baseButton };
