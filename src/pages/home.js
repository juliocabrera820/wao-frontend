import { useEffect } from 'react';
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
      Home
    </h2>
  );
}

export default Home;