import "./style.scss";
import useFetch from '../../../Hooks/useFetch';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=> state.home);

  const {data, loading} = useFetch("/movie/upcoming");

  // Get Background Poster by Original Size and Change Random
  useEffect(()=>{
    const bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  // navigate to query Search Results
  const searchQueryHandler = (e)=>{
    if(e.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className='heroBanner'>
      <div className="backdrop-img"></div>
      <div className="wrapper">
        <div className="bannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of movies, TV show and people to discover. Explore now.</span>
        </div>
        <div className="searchBar">
          <input type="text" placeholder='Search a Movie or TV Show...' />
          <button 
            onChange={(e)=> searchQueryHandler(e.target.value)}
            onKeyUp={searchQueryHandler}
            className="">Search</button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner