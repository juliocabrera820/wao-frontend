import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import SearchResults from './pages/searchResults';
import Feeds from './pages/feeds';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="search" element={<SearchResults/>}/>
        <Route path="feeds" element={<Feeds/>}/>
      </Routes>
    </Router>
  );
}

export default App;
