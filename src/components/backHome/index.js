import { LINK, Icon } from "../../shared/styles";
import Arrow from "../../assets/back.png";

const BackHome = () => {
  return (
    <div>
      <Icon src={Arrow} alt={Arrow} />
      <LINK.Page className="btn btn-success" buttonType="tertiary" to="/">
        Back home
      </LINK.Page>
    </div>
  );
};

export default BackHome;
