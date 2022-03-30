import {
  Card,
  Category,
  Title,
  Description,
  ReadMore,
  Footer,
  Date,
} from "./styles";

const New = ({ title, category, published, url, description, image }) => {
  return (
    <Card className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt={image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Category className="card-text">{category || 'Default'}</Category>
            <Title className="card-title">{title || 'Default'}</Title>
            <Description className="card-text">{description || 'Default'}</Description>
            <Footer>
              <p className="card-text">
                <Date>{published || 'Default'}</Date>
              </p>
              <ReadMore
                buttonType="tertiary"
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
