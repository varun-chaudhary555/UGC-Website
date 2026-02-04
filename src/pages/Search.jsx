import React from 'react'

function Search() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/rtis</button>
        <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div>
        <div className='border border-t-orange-500! border-t-4! h-24 w-120 ml-100 my-20 -pb-8!'>
        <input type="text" placeholder='Enter Search Term' className='border rounded my-10! mt-6! pr-26 ml-8! pl-4 py-1' />
        <button className='-ml-1! border text-sm! bg-blue-950 px-2 py-2 rounded text-white'>Website Search</button>
        </div>
      </div>
    </div>
  )
}

export default Search