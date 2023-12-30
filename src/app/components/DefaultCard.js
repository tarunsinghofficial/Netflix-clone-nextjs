'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { MdAdd, MdPlayCircle } from "react-icons/md";
import { IoIosArrowDropdown, IoMdPlay } from "react-icons/io";
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#141414',
  borderRadius: 5,
  boxShadow: 10,
};

function Card({ title, rating, imgUrl, genre_1, genre_2, genre_3, description }) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className='w-60 h-40 rounded-md'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={imgUrl} alt="banner" className='w-60 h-40 rounded-md object-cover' width={1000} height={500} />
      {isHovered && (
        <div className="absolute top-0 w-64 h-60 grid grid-rows-2 bg-[#141414] rounded-md overflow-hidden shadow-2xl shadow-black transition-transform duration-700 ease-in-out hover:scale-125">
          <div className='overflow-visible rounded-t-md'>
            <Image src={imgUrl} alt="banner" width={500} height={500} className="object-cover block w-full h-full" />
          </div>
          <div className='flex flex-col justify-between p-3 rounded-b-md space-y-2'>
            <div className='flex justify-between items-start'>
              <div className='flex flex-row gap-2 justify-center items-center'>
                <MdPlayCircle color='white' size={30} className='hover:cursor-pointer hover:scale-110' />
                <MdAdd color='white' size={26} className='border-gray-400 border-2 rounded-full p-1 hover:cursor-pointer hover:scale-110' />
                <AiOutlineLike color='white' size={26} className='border-gray-400 border-2 rounded-full p-1 hover:cursor-pointer hover:scale-110' />
                <AiOutlineDislike color='white' size={26} className='border-2 border-gray-400 rounded-full p-1 hover:cursor-pointer hover:scale-110' />
              </div>
              <IoIosArrowDropdown onClick={handleOpen} color='white' size={26} className='border-2 border-gray-400 rounded-full p-1 hover:cursor-pointer hover:scale-110' />
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
                  <Image src={imgUrl} alt={title} width={1000} height={1000} className='w-full h-full object-cover' />
                  {/* match and info */}
                  <div className='relative bottom-[14em] bg-[#141414] h-full w-full flex flex-col gap-4 p-10'>
                    <h3 className="text-lg text-green-500 font-bold">{rating}</h3>
                    <h3 className="line-clamp-5 md:line-clamp-none lg:line-clamp-none text-md w-full max-w-2xl">
                      {description}
                    </h3>
                  </div>
                  <div className="absolute bottom-[13.5em] bg-gradient-to-t from-[#141414] w-full h-[200px]" />
                  <div className="absolute bottom-[15em] space-y-5">
                    {/* title */}
                    <h2 className="pl-10 text-xl md:text-2xl lg:text-4xl font-bold">
                      {title}
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
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-bold text-white">{title}</h3>
              <h3 className="text-xs text-green-500 font-bold">{rating}</h3>
              <h3 className="text-[10px]">{genre_1} • {genre_2} • {genre_3}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
