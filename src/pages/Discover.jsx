import React from 'react'
import {Error, Loader, SongCard} from '../components';
import { genres } from '../assets/constants'

const Discover = () => {
  return (
    <section className='discover-section py-32'>
      <div className='discover-container'>
        <div className='header-container flex justify-between items-center'>
        <h2 className='text-3xl font-semibold text-white'>Discovery</h2>
        <select name="" id="" value="" onChange={() => {}} className=' p-1 rounded-md bg-gray-900 text-white'>
            {genres.map((genre) => (
                <option key={genre.value} value={genre.value} className='text-white'>{genre.title}</option>
            ))}
        </select>
        </div>
      </div>

      
    </section>
  )
}

export default Discover
