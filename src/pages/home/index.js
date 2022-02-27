import SearchBar from "../../components/searchBar";
import ManipulateNews from "../../components/manipulateNews";

const Home = () => {
  return (
    <div className="container mt-5 col-md-6">
      <SearchBar />
      <ManipulateNews />
    </div>
  );
};

export default Home;
