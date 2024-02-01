import axios from 'axios';
import React, { useEffect } from 'react'
import OutputCard from './OutputCard';

const Search = () => {

   
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://localhost:5000?q=${query}`);
//       setData(res.dataList);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);

  return (
    <div>
      
      <div className='flex justify-center'>
        <div className="mb-3 xl:w-96">
      <input
          type="search"
          className="relative block w-full min-w-0 flex-auto rounded border border-solid
           border-neutral-500 bg-transparent px-3 py-[0.25rem] font-normal leading-[1.6]
           text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]
           "
          id="search"
          placeholder="Enter Mobile Number....." 
        //   onChange={(e) => setformData(e.target.value.toLowerCase())}
          />
  </div>
        </div>
      
    </div>
  )
}

export default Search
