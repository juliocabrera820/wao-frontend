import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors, hoverColors } from "../../shared/consts/colors";

const baseButton = css`
  background-color: ${(props) => colors[props.buttonType]};
  border-color: ${(props) => colors[props.buttonType]};
  &:hover {
    background-color: ${(props) => hoverColors[props.buttonType]};
    border-color: ${(props) => hoverColors[props.buttonType]};
  }
  &:focus {
    border: 2px solid ${(props) => colors[props.buttonType]};
    background-color: ${(props) => colors[props.buttonType]};
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => colors[props.buttonType]};
  }
`;

const Button = styled.button`
  ${baseButton}
`;

const Icon = styled.img`
  position: absolute;
  padding: 10px;
`;

const LINK = {};

LINK.Page = styled(Link)`
  ${baseButton}
  &:link {
    color: black;
  }
  width: 10rem;
`;

export { Button, baseButton, Icon, LINK };
