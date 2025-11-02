import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react'
import Slider from 'react-slick';

const SearchProduct = ({ setSearch, search }) => {

    const HandleSearch = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div className='flex flex-wrap gap-3 rounded-md items-start md:flex-row'>
            {/* Search  */}
            <input
                value={search}
                type="text"
                className=' shadow-inner shadow-gray-200 bg-white focus:outline-none rounded-md p-2 px-2 border font-semibold'
                placeholder='Search....'
                onChange={HandleSearch} />
        </div>
    )
}

React.memo(SearchProduct);

export default SearchProduct;