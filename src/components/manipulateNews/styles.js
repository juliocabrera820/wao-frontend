import styled from "styled-components";
import { colors } from "../../shared/consts/colors";
import { Button } from "../../shared/styles";

const FilterNews = styled.select`
  background-color: ${colors.secondary};
  width: 9rem;
`;

const alternativeColor = '#dcceec';

const UpdateButton = styled(Button)`
  background-color: ${alternativeColor};
  border-color: ${alternativeColor};
  color: ${colors.primary};
  &:hover {
    background-color: ${colors.secondary};
    border-color: ${colors.secondary};
  }
  width: 8rem;
`;

export { FilterNews, UpdateButton };
