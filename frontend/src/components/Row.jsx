import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);
  console.log(movies);
  return (
    <div>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((items, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/original/${items?.backdrop_path}`}
                alt={items?.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
