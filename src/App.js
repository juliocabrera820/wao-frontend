import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
