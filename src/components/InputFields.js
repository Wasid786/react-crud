import React from 'react'
import SexPicker from './SexPicker';
const InputFields = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div>
    {/* /// first row  */}
    <div className=" w-full flex   pb-1 leading-7">
        
    <div className='flex items-center w-2/7 '>
      <label htmlFor="mobileNumberInput" className="block text-sm   font-semibold text-gray-600 ">
        Contact No:
      </label>
      <input
        type="number"
        className="appearance-none   bg-white border-b-2 border-dotted border-gray-400
                      ml-3 leading-1 focus:outline-none focus:border-blue-500"
       
        placeholder="e.g., 123-456-7890"
      />
    </div>
    <div className='flex items-center  w-6/12 px-3'>
      <label htmlFor="nameInput" className="block font-semibold text-sm text-gray-600 ">
        Name:
      </label>
      <input
        type="text"
        className="appearance-none w-11/12 bg-white border-b-2 border-dotted border-gray-400
                      px-5 leading-1 focus:outline-none focus:border-blue-500"
        placeholder="Enter name"
      />
    </div>
    <div className='flex items-center px-2'>
      <label htmlFor="dobInput" className="block font-semibold  text-sm text-gray-600 ">
        DOB:
      </label>
      <input
        type="date"
        className="appearance-none w-4/5  bg-white border-b-2 border-dotted border-gray-400
                      px-5 leading-1 focus:outline-none focus:border-blue-500"
      />
    </div>
    </div>
      {/* /// second row  row  */}
    <div className=" w-full flex  pb-1   leading-7">
    <SexPicker/>
    <div className='flex flex-row items-center mt-auto w-28 '>
      <label htmlFor="mobileNumberInput" className="block text-sm  font-semibold  text-gray-600">
        Age:
      </label>
      <input
        type="number"
        placeholder="age"
        className="appearance-none w-3/4  bg-white border-b-2 border-dotted border-gray-400
                      px-5 leading-1 focus:outline-none focus:border-blue-500"
      />
    </div>         
    <div className='flex items-center w-1/2'>
      <label htmlFor="nameInput" className="block text-sm font-semibold text-gray-600 px-2">
        F-Name:
      </label>
      <input
        type="text"
        className="appearance-none w-5/6 bg-white border-b-2 border-dotted border-gray-400
        px-5 leading-1 focus:outline-none focus:border-blue-500"
        placeholder="Enter father name"
      />
    </div>
    <div className='flex items-center'>
      <label htmlFor="mobileNumberInput" className="block text-sm font-semibold text-gray-600 pr-2">
        Weight:
      </label>
      <input
        type="number"

        className="appearance-none w-4/5  bg-white border-b-2 border-dotted border-gray-400
        px-5 leading-1 focus:outline-none focus:border-blue-500"
        placeholder="e.g., 5 Kg"
      />
    </div>
   </div>
   {/* // third row  */}
   <div className=" w-full flex justify-between  pb-1  leading-7">
   <div className='flex items-center w-5/6 '>
      <label htmlFor="nameInput" className="block text-sm font-semibold text-gray-600 pr-2">
        Address:
      </label>
      <input
        type="text"
        className="appearance-none w-11/12 bg-white border-b-2 border-dotted border-gray-400
        px-5 leading-1 focus:outline-none focus:border-blue-500"
        placeholder="Enter Address"
      />
    </div>
    <div className='flex items-center px-2'>
      <label htmlFor="dobInput" className="block font-semibold  text-sm text-gray-600 ">
       Date:
      </label>
      <input
        type="date"
        className="appearance-none w-4/5  bg-white border-b-2 border-dotted border-gray-400
                      px-5 leading-1 focus:outline-none focus:border-blue-500"
      />
    </div>
   </div>
    
    


  <hr className="h-px my-0 bg-gray border-0 dark:bg-gray-700" />

</div>
  )
}

export default InputFields
