import { Box } from "./styles";

const NoResults = ({ word }) => {
  return (
    <Box>
      <h3>Oops! We can not find results about "{word}"</h3>
      <h4>Try entering a more generic word</h4>
    </Box>
  );
};

export default NoResults;
