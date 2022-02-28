import Thumbnail from "../../assets/thumbnail.png";
import {
  Card,
  Category,
  Title,
  Description,
  ReadMore,
  Footer,
  Date,
} from "./styles";

const New = ({ title, category, published, url, description }) => {
  return (
    <Card className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Thumbnail} alt={Thumbnail} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Category className="card-text">{category}</Category>
            <Title className="card-title">{title}</Title>
            <Description className="card-text">{description}</Description>
            <Footer>
              <p className="card-text">
                <Date>{published}</Date>
              </p>
              <ReadMore
                buttonType="terciary"
                className="btn btn-success"
                href={url}
                target="_blank"
              >
                Read More
              </ReadMore>
            </Footer>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default New;
