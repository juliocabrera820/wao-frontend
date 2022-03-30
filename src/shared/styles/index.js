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

const baseLink = css`
  ${baseButton}
  &:link {
    color: black;
  }
`;

LINK.Page = styled(Link)`
  ${baseLink}
  width: 10rem;
`;

const FormField = styled.input`
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

const Select = styled.select`
  background-color: ${colors.secondary};
  width: 9rem;
`;

export { Button, baseButton, Icon, LINK, FormField, Select, baseLink };
