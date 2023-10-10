import React from 'react';
import Menu from '../images/hamburgerimg.png';
import Logo from '../images/streamifylogo.jpg';
import User from '../images/images.png';

const Head = () => {
  return (
    <div className='grid grid-flow-col p-4 my-2 shadow-md'>
      <div className='flex col-span-1'>
        <img src={Menu} alt="menu" className='h-11 '/>
        <div className='flex ml-4'>
            <img src={Logo} alt="Streamify logo" className='h-11'/>
            <h1 className='text-blue-800 font-semibold text-xl p-2 bg-blue-200 tracking-tighter'>Streamify</h1>
        </div>
      </div>
      <div className='col-span-10 px-24'>
        <input type="text" placeholder="Search trending movies, songs, videos..." className='w-2/3 py-1 px-5 my-1 border border-gray-500 rounded-l-3xl'/>
        <button className='rounded-r-3xl bg-gray-100 py-1 px-3 font-semibold border border-gray-500'>Search</button>
      </div>
      <div className='col-span-1'>
        <img src={User} alt="user" className='h-11'/>
      </div>
    </div>
  )
}

export default Head