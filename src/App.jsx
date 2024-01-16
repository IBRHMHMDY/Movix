import { useEffect } from 'react';
import './App.css'
import {fetchData} from './utils/api.js';

function App() {
  useEffect(()=>{
    moviesPopular();
  },[]);

  const moviesPopular = ()=>{
    fetchData('movie/popular')
  }

  return (
    <div>
      Welcome Movies
    </div>
  )
}

export default App
