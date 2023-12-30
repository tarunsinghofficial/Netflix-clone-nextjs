"use client";
import React from "react";
import DefaultCard from "./DefaultCard";

// using TMDB data
import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import requests from "../api";
import "../globals.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, rowId }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const scrollLeft = () => {
    let scroll = document.getElementById("slider" + rowId);
    scroll.scrollLeft = scroll.scrollLeft - 500;
  };

  const scrollRight = () => {
    let scroll = document.getElementById("slider" + rowId);
    scroll.scrollLeft = scroll.scrollLeft + 500;
  };

  return (
    <>
      <div className="relative">
        <h2 className="text-2xl text-white font-bold">{title}</h2>
      </div>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={scrollLeft}
          size={40}
          className="hidden group-hover:block bg-white text-black rounded-full absolute left-0 top-[30%] -translate-y-[30%] opacity-50 hover:opacity-100 cursor-pointer z-10"
        />
        <div
          id={"slider" + rowId}
          className="flex flex-row overflow-x-auto scroll-hide"
        >
          <div className="relative flex whitespace-normal gap-1 mt-[30px] mb-[120px]">
            {movies &&
              movies.map((item, index) => (
                <DefaultCard
                  key={index}
                  title={item.original_title}
                  imgUrl={`${base_url}${item.poster_path}`}
                  rating={`${Math.round(item.vote_average * 10)}% Match`}
                  genre_1={item.genre_ids[0]}
                  genre_2={item.genre_ids[1]}
                  genre_3={item.genre_ids[2]}
                  description={item.overview}
                />
              ))}
          </div>
        </div>
        <MdChevronRight
          onClick={scrollRight}
          size={40}
          className="hidden group-hover:block bg-white transition-transform ease-in-out duration-300 text-black rounded-full absolute top-[30%] -translate-y-[30%] right-0 opacity-50 hover:opacity-100 cursor-pointer z-10"
        />
      </div>
    </>
  );
}

export default Row;