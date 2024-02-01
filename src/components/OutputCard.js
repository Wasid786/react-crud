import React from 'react'

const OutputCard = ({dataList,handleDelete,handleEdit}) => {
  return (
    <div>
      <div className="cardContainer mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataList.map((e1) => (
              <div
                className="card bg-white rounded-lg p-4 shadow-md"
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
                    className="btn btn-edit  bg-yellow-400 text-black  hover:bg-green-200 font-bold py-1 px-2 rounded"
                    onClick={() =>handleEdit(e1) }
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-delete bg-red-500  text-black  hover:bg-red-700font-bold py-1 px-2 rounded ml-2"
                    onClick={() => handleDelete(e1._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default OutputCard
