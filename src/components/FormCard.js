import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'


const FormCard = ({handleSubmit,handleOnChange,handleclose, rest}) => {
  return (
    <div className='addContainer'>

    <form onSubmit={handleSubmit}>
    {/* <div className='close-btn'onClick={() => setAddSection(false)}> <MdClose/> </div> */}
    <div className='close-btn'onClick={handleclose}> <MdClose/> </div>
    <label htmlFor="Mobile">Mobile:</label>
     <input type="number" id='mobile' name='mobile' onChange={handleOnChange}value={rest.mobile}/>

     <label htmlFor="name">Name:</label>
     <input type="text" id='name' name='name' onChange={handleOnChange} value={rest.name}/>
 
     <label htmlFor="Email">Email:</label>
     <input type="email" id='email' name='email' onChange={handleOnChange}value={rest.email}/>
 
    

     <label htmlFor="name">DOB:</label>
     <input type="text" id='dob' name='dob' onChange={handleOnChange} value={rest.dob}/>

     
     <label htmlFor="name">Sex:</label>
     <input type="text" id='sex' name='sex' onChange={handleOnChange} value={rest.sex}/>

     
     <label htmlFor="name">Age:</label>
     <input type="text" id='age' name='age' onChange={handleOnChange} value={rest.age}/>
     
     <label htmlFor="name">F-Name:</label>
     <input type="text" id='fname' name='fname' onChange={handleOnChange} value={rest.fname}/>
     
     <label htmlFor="name">Weight:</label>
     <input type="text" id='weight' name='weight' onChange={handleOnChange} value={rest.weight}/>
     
     <label htmlFor="name">Address:</label>
     <input type="text" id='address' name='address' onChange={handleOnChange} value={rest.address}/>
       
     {/* <label htmlFor="name">Date:</label>
     <input type="text" id='date' name='date' onChange={handleOnChange} value={rest.date}/> */}
      
     <button className='btn'>Submit</button>
    </form>
 
     </div>
  )
}

export default FormCard
