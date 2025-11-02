import React from 'react'

const FilterProduct = ({ SetCategory, min, max, setMin, setMax, defaultMax, setIscheckbox, ischeckbox, setSortData, sortdata, setReset, openMenu }) => {
    const HandleMinChange = (e) => {
        const value = Number(e.target.value) || 0;
        setMin(value);
    }

    const HandleMaxChange = (e) => {
        const value = Number(e.target.value) || defaultMax;
        setMax(value);
    }

    const Handlechebox = (e) => {
        setIscheckbox(e.target.checked);
    }

    const HandleSort = (e) => {
        setSortData(e.target.value);
    }

    return (
        <div className={`${openMenu ? 'flex-col p-3 bg-white gap-2 rounded-md' : 'flex items-start gap-3 flex-wrap md:flex-row '}`}>
            {/* Category */}
            <select
                className={`${openMenu ? 'shadow-none' : ''} shadow-inner shadow-gray-200 bg-whitefocus:outline-none rounded-md p-2 px-2 border font-semibold`} onChange={(e) => SetCategory(e.target.value)}>
                <option value="">Category</option>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Fitness & Outdoor">Fitness & Outdoor</option>
            </select>
            {/* Price range Slider */}
            <div className=''>
                <span className="text-sm font-semibold">Min: </span>
                <input
                    type="number"
                    id='min'
                    min='0'
                    max={1000}
                    placeholder='Min'
                    value={min}
                    onChange={HandleMinChange}
                    className={`${openMenu ? 'shadow-none border-none' : ''} bg-white shadow-inner shadow-gray-200 focus:outline-none rounded-md  p-2 px-2 border font-semibold w-24 border-gray-300 text-md focus:border-indigo-500 text-sm   `}
                />
            </div>
            <div className=''>
                <span className="text-sm md:ml-2 font-semibold ">Max: </span>
                <input
                    type="number"
                    min={min}
                    value={max}
                    onChange={HandleMaxChange}
                    placeholder='Max'
                    className={`${openMenu ? 'shadow-none border-none' : ''} bg-white shadow-inner shadow-gray-200 focus:outline-none rounded-md  p-2 px-2 border font-semibold w-24  border-gray-300 text-md focus:border-indigo-500 text-sm`}
                />
            </div>

            <div className={`${openMenu ? 'shadow-none ' : ''} bg-white shadow-inner shadow-gray-200 focus:outline-none rounded-md p-2 px-2 border flex items-center gap-2 font-semibold`}>
                <span>In-stock: </span>
                <input
                    type="checkbox"
                    checked={ischeckbox}
                    onChange={Handlechebox}
                    className='text-2xl'
                />
            </div>
            <div className={`${openMenu ? 'shadow-none' : ''} bg-white shadow-inner shadow-gray-200 focus:outline-none rounded-md gap-2 flex items-center p-2 px-2 border font-semibold`}>
                <select name="" id="" value={sortdata} onChange={HandleSort} className='focus:outline-none'>
                    <option value="Low → High">Low → High</option>
                    <option value="High → Low">High → Low</option>
                </select>
            </div>
            {/* reset Filter  */}
            <div
                onClick={() => setReset(true)}
                className={`${openMenu ? 'shoadow-none' : ''} text-red-500 select-none font-semibold p-2 px-2 md:shadow-inner shadow-gray-200 rounded-md bg-white cursor-pointer border`}>
                Reset Filter
            </div>
        </div>
    )
}

React.memo(FilterProduct)

export default FilterProduct;