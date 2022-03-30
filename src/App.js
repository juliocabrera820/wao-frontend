import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import SearchResults from "./pages/searchResults";
import Feeds from "./pages/feeds";
import FeedState from "./providers/feeds/feedsState";
import AddFeeds from "./pages/addFeeds";
import SearchBar from './components/searchBar';
import FeedNews from "./pages/feedNews";

function App() {
  return (
    <FeedState>
      <Router>
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="feeds" element={<Feeds />} />
          <Route path="feeds/:id" element={<FeedNews />} />
          <Route path="addFeeds" element={<AddFeeds />} />
        </Routes>
      </Router>
    </FeedState>
  );
}

export default App;
