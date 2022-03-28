import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import SearchResults from "./pages/searchResults";
import Feeds from "./pages/feeds";
import FeedState from "./providers/feeds/feedsState";
import NoResults from "./components/noResults";

function App() {
  return (
    <FeedState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="feeds" element={<Feeds />} />
          <Route path="noResults" element={<NoResults />} />
        </Routes>
      </Router>
    </FeedState>
  );
}

export default App;
