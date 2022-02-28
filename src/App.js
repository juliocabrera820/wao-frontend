import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import SearchResults from './pages/searchResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="search" element={<SearchResults/>}/>
      </Routes>
    </Router>
  );
}

export default App;
