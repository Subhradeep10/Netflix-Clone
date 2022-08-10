import React from "react";
import { useEffect, useState } from "react";
import request from "../config";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(request.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movie);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div>
          <button>Play</button>
          <button>Watch Later</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
