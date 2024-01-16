
import './App.css'
import {fetchDataFromApi} from './utils/api';
import { getApiConfiguration } from './store/homeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/home';
import Details from './pages/details/Details';
import SearchResults from './pages/searchResults/SearchResults';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  const {url} = useSelector((state)=> state.home);
  const dispatch = useDispatch();

  useEffect(()=>{
    apiTesting()
  },[]);

  const apiTesting = ()=>{
    fetchDataFromApi("/movie/popular")
    .then((res)=>{
      dispatch(getApiConfiguration(res))
    })
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
