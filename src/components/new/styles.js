import styled from "styled-components";
import { generateColor } from "../../utils/color";
import { baseButton } from "../../shared/styles";

const Card = styled.div`
  box-shadow: 3px 3px 2px #888888;
  max-width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Category = styled.p`
  color: ${generateColor};
`;

const Title = styled.h4`
  color: #000000;
  font-weight: 600;
`;

const Description = styled.p`
  color: #92a9bd;
  font-size: 14px;
`;

const ReadMore = styled.a`
  ${baseButton}
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
`;

const Date = styled.small`
  font-weight: bold;
  font-size: 12px;
`;

export { Card, Category, Title, Description, ReadMore, Footer, Date };
