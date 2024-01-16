
import './App.css'
import {fetchDataFromApi} from './utils/api';
import { getApiConfiguration } from './store/homeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
    <div>
      Welcome Movies
      {url?.total_pages}
    </div>
  )
}

export default App
