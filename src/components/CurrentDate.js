import React, { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateCurrentDate = () => {
      setCurrentDate(new Date());
    };

    const intervalId = setInterval(updateCurrentDate, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
          <div className='flex items-center px-2'>
                  <label htmlFor="dobInput" className="block font-semibold  text-sm text-gray-600 ">
                    Date:
                  </label>
                  <input
                    type="text"
                    className="appearance-none w-4/5  bg-white border-b-2 border-dotted border-gray-400
                      px-5 leading-1 focus:outline-none focus:border-blue-500"
                      value={currentDate.toDateString()}
                  />
                   {/* <p>{currentDate.toDateString()}</p> */}
                </div>
     
    </div>
  );
};

export default CurrentDate;
