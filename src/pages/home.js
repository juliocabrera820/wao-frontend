import { useEffect } from 'react';
import SearchBar from '../components/searchBar';
import { newsService } from '../services/newsService';

const Home = () => {
  useEffect(()=>{
    retrieveNews(); 
  })

  const retrieveNews = async () => {
    const { data } = await newsService().all()
    console.log(data)
  }
  return(
    <h2>
      <SearchBar/>
      Home
    </h2>
  );
}

export default Home;