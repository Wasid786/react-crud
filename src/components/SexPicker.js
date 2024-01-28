import React, { useState } from 'react';

const SexPicker = () => {
  const [selectedSex, setSelectedSex] = useState('');

  const handleSexChange = (event) => {
    setSelectedSex(event.target.value);
  };

  return (
    <div className="flex items-center  w-28">
      <label htmlFor="sexPicker" className="mr-1  font-semibold">
        Sex:
      </label>
      <select
        id="sexPicker"
        value={selectedSex}
        onChange={handleSexChange}
        className="appearance-none w-3/5  bg-white border-b-2 border-dotted border-gray-400 leading-1  focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled>
          Select Sex
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
    </div>
  );
};

export default SexPicker;
