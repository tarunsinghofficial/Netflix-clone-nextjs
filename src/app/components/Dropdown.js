'use client' // added for using useState at client side for nextjs
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2 px-12 md:px-80">
      <div
        className="flex flex-row justify-between cursor-pointer text-lg md:text-xl font-semibold w-full bg-[#2D2D2D] hover:bg-[#444444] p-8"
        onClick={toggleDropdown}
      >
        {title}
        <div className='text-3xl'>
            {isOpen ? <AiOutlineClose color='white' /> : <AiOutlinePlus color='white' /> }
        </div>
      </div>
      {isOpen && <div className="mt-2 text-lg md:text-xl p-8 bg-[#2D2D2D]">{content}</div>}
    </div>
  );
}

export default Dropdown;
