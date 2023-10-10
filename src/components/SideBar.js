import React from 'react'
import { FaSuitcase,FaGamepad, FaFootballBall, FaTv, FaMusic } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-md col-span-1'>
      <ul>
        <li className='flex'>Home</li>
        <li className='flex'>Shorts</li>
        <li className='flex'>Subscriptions</li>
        <li className='flex'> Watch Later</li>
        <li className='flex'> Library</li>

      </ul>
      <h1 className='font-semibold flex pt-4 pb-2'><FaSuitcase className='m-1'/>Subscriptions</h1>
      <ul>
        <li className='flex'><FaTv className='m-1'/>Movies</li>
        <li className='flex'><FaFootballBall className='m-1'/>Sports</li>
        <li className='flex'><FaGamepad className='m-1'/>Gaming</li>
        <li className='flex'><FaMusic className='m-1'/> Music</li>
      </ul>
      <h1 className='font-semibold flex pt-4 pb-2'><FaSuitcase className='m-1'/>Watch Later</h1>
      <ul>
        <li className='flex'><FaTv className='m-1'/>Movies</li>
        <li className='flex'><FaFootballBall className='m-1'/>Sports</li>
        <li className='flex'><FaGamepad className='m-1'/>Gaming</li>
        <li className='flex'><FaMusic className='m-1'/> Music</li>
      </ul>
    </div>
  )
}

export default SideBar;