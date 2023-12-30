'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import requests from '../api';
import { IoIosInformationCircleOutline, IoMdPlay } from 'react-icons/io';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player/youtube';
import { MdAdd, MdPlayCircle } from 'react-icons/md';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 10,
  borderRadius: 5,
};

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    axios.get(requests.fetchPopular).then((response) => {
      setMovies(response.data.results);

      if (response.data.results.length > 0) {
        fetchTrailerKey(response.data.results[0].id);
      }
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 20000);

    return () => clearInterval(intervalId);
  }, [movies]);

  const movie = movies[currentMovieIndex];

  const handleOpen = () => {
    setOpen(true);
    fetchTrailerKey(movie.id);
  };

  const handleClose = () => setOpen(false);

  const fetchTrailerKey = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        {
          params: {
            api_key: '4d1264ba7a1020472f7be97694ca7682',
          },
        }
      );

      const trailers = response.data.results.filter(
        (video) => video.type === 'Trailer'
      );

      if (trailers.length > 0) {
        setTrailerKey(trailers[0].key);
      }
    } catch (error) {
      console.error('Error fetching trailer key:', error);
    }
  };

  return (
    <div className="w-full h-[750px] relative overflow-hidden transition-transform ease-in-out duration-500">
      <div className="w-full h-[750px]">
        <div className="bg-gradient-to-t from-[#141414] absolute w-full h-[650px]" />
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
          width={1000}
          height={1000}
          className="w-full h-[650px] object-cover"
        />
        <div className="w-full absolute top-[25%] p-8 md:p-8 lg:p-14 space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {movie?.title}
          </h2>
          <h3 className="line-clamp-3 text-lg md:text-xl lg:text-xl w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {movie?.overview}
          </h3>
          <div className="flex flex-row gap-4 mt-10">
            <div className="flex flex-row cursor-pointer gap-2 w-28 h-10 rounded-md p-2 bg-white text-black items-center justify-center text-lg font-bold">
              <IoMdPlay color="black" />
              <a href="#" className="">
                Play
              </a>
            </div>
            <div
              onClick={handleOpen}
              className="flex flex-row gap-2 cursor-pointer items-center justify-center w-32 h-10 rounded-md p-2 bg-[#848484] text-white text-lg font-bold"
            >
              <IoIosInformationCircleOutline color="white" />
              <p>More info</p>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >

              <Box
                sx={style}
                className="w-5/6 h-5/6 md:w-4/6 md:h-5/6 lg:w-4/6 lg:h-5/6 overflow-hidden "
              >
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${trailerKey}`}
                  controls={true}
                  width='100%'
                  height="100%"
                />
                {/* match and info */}
                <div className='relative bottom-[14em] bg-[#141414] h-full w-full flex flex-col gap-4 p-10'>
                  <h3 className="text-lg text-green-500 font-bold">{`${Math.round(
                    movie?.vote_average * 10
                  )}% Match`}</h3>
                  <h3 className="line-clamp-5 md:line-clamp-none lg:line-clamp-none text-md w-full max-w-2xl">
                    {movie?.overview}
                  </h3>
                </div>
                <div className="absolute bottom-[13.5em] bg-gradient-to-t from-[#141414] w-full h-[200px]" />
                <div className="absolute w-full bottom-[15em] space-y-5">
                  {/* title */}
                  <h2 className="pl-10 text-xl md:text-2xl lg:text-4xl font-bold">
                    {movie?.title}
                  </h2>
                  <div className="pl-10 flex flex-col md:flex-row lg:flex-row gap-5">
                    {/* play button */}
                    <div className="flex flex-row cursor-pointer gap-2 w-28 h-10 rounded-md p-2 bg-white text-black items-center justify-center text-lg font-bold">
                      <IoMdPlay color="black" />
                      <a href="#" className="">
                        Play
                      </a>
                    </div>
                    {/* extra buttons */}
                    <div className="flex justify-between items-start">
                      <div className="flex flex-row gap-2 justify-center items-center">
                        <MdPlayCircle color='white' size={40} className='hover:cursor-pointer hover:scale-110' />
                        <MdAdd color='white' size={34} className='border-gray-400 border-2 rounded-full p-1 hover:cursor-pointer hover:scale-110' />
                        <AiOutlineLike color='white' size={34} className='border-gray-400 border-2 rounded-full p-1 hover:cursor-pointer hover:scale-110' />
                        <AiOutlineDislike color='white' size={34} className='border-2 border-gray-400 rounded-full p-1 hover:cursor-pointer hover:scale-110' />
                      </div>
                    </div>
                  </div>
                </div>



              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Banner;
