import React from 'react'
// import Search from './Search'

const OutputCard = ({ dataList, handleDelete, handleEdit, getSearchResults, searchResultsFound }) => {
  return (
    <div>
      <div>

        <div className='flex justify-center'>
          <div className="mb-3 xl:w-96">
            <input
              type="search"
              className="relative block w-full min-w-0 flex-auto rounded border border-solid
            border-neutral-500 bg-transparent px-3 py-[0.25rem] font-normal leading-[1.6]
            text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]"
              id="search"
              placeholder="Enter Mobile Number....."
              onChange={(e) => getSearchResults(e.target.value)}
            />
          </div>
        </div>

      </div>

      <div className=" cardContainer mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResultsFound ? (
          dataList.map((e1) => (
            <div
              className="card bg-amber-100 rounded-lg p-4 shadow-md"
              key={e1._id}
            >
              <div>
                <strong className="font-bold text-lg">Mobile No:</strong>{" "}
                {e1.phone}
              </div>
              <div>
                <strong className="font-bold text-lg">Name:</strong> {e1.name}
              </div>
              <div>
                <strong className="font-bold text-lg">DOB:</strong> {e1.dob}
              </div>
              <div>
                <strong className="font-bold text-lg">Sex:</strong> {e1.sex}
              </div>
              <div>
                <strong className="font-bold text-lg">Age:</strong> {e1.age}
              </div>
              <div>
                <strong className="font-bold text-lg">F-Name:</strong>{" "}
                {e1.fname}
              </div>
              <div>
                <strong className="font-bold text-lg">Weight:</strong>{" "}
                {e1.weight}
              </div>
              <div>
                <strong className="font-bold text-lg">Address:</strong>{" "}
                {e1.address}
              </div>

              <div className="cardButtons mt-2 flex justify-end">
                <button
                  className="btn btn-edit  bg-stone-950 text-white  hover:bg-stone-700 font-bold py-1 px-2 rounded"
                  onClick={() => handleEdit(e1)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete bg-red-500  text-black  hover:bg-red-700 font-bold py-1 px-2 rounded ml-2"
                  onClick={() => handleDelete(e1._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )
          )) : (
            <p className=' font-bold text-xl flex justify-center '>No Result Found! <br />Please, Create New Card With Add Button</p>
       
        )}
      </div>
    </div>
  )
}

export default OutputCard
