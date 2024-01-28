
import './App.css';
import {MdClose} from 'react-icons/md'
import { useEffect, useState } from 'react';
import axios from "axios"
import FormCard from './components/FormCard';

axios.defaults.baseURL = "http://localhost:8080/"

function App() {
  const [addSection, setAddSection] = useState(false)
  const [editSection,setEditSection]= useState(false)
  const [formData,setformData] = useState({
    mobile: "",
    name:"",
    dob: "",
    sex: "",
    age: "",
    fname: "",
    weight: "",
    address: "",
  })

  const [formDataEdit,setformDataEdit] = useState({
    mobile: "",
    name:"",
    dob: "",
    sex: "",
    age: "",
    fname: "",
    weight: "",
    address: "",
    _id : "",
  })
  
  
  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e)=>{
    const {value,name} =e.target
     setformData((preve)=>{
      return {
        ...preve,
        [name]:value
      }
     })
  }

  const handleSubmit =async(e)=>{
    e.preventDefault()
    const data=await axios.post("/create",formData)
    console.log(data)
    if(data.data.success){
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
      setformData({
        mobile: "",
        name:"",
        dob: "",
        sex: "",
        age: "",
        fname: "",
        weight: "",
        address: "",     })
    }
  }
  //  const getFetchData = async ()=>{
  //   const data = await axios.get("/")
  //   console.log(data)
  //   if(data.data.success){
  //     setDataList(data.data)

      
  //   }
  //  }
   
  const getFetchData = async () => {
    try {
      const response = await axios.get("/");
      if (response.data.success) {
        setDataList(response.data.data); // Assuming the array is inside `data` property
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

    useEffect(()=>{
     getFetchData()
    },[])

    const handleDelete =async(id)=>{
      const data = await axios.delete("/delete/"+id)
     if(data.data.success){
      getFetchData()
      alert(data.data.message)
     }
    }

    const handleUpdate = async(e)=>{
       e.preventDefault()
       const data = await axios.put("/update/",formDataEdit)
       if(data.data.success){
        getFetchData()
        alert(data.data.message)
        setEditSection(false)
       }
    }
    const handleEditOnChange = async(e)=>{
      const {value,name} =e.target
      setformDataEdit((preve)=>{
       return {
         ...preve,
         [name]:value
       }
      })
    }
    const handleEdit =(e1)=>{
      setformDataEdit(e1)
      setEditSection(true)
    }

    return (
      <div className="App bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto">
          <button
            className="btn btn-add bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setAddSection(true)}
          >
            Add
          </button>
          {addSection && (
            <FormCard
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              handleclose={() => setAddSection(false)}
              rest={formData}
            />
          )}
          {editSection && (
            <FormCard
              handleSubmit={handleUpdate}
              handleOnChange={handleEditOnChange}
              handleclose={() => setEditSection(false)}
              rest={formDataEdit}
            />
          )}
  
          <div className="cardContainer mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataList.map((e1) => (
              <div
                className="card bg-white rounded-lg p-4 shadow-md"
                key={e1._id}
              >
                <div>
                  <strong className="font-bold text-lg">Mobile No:</strong>{" "}
                  {e1.mobile}
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
                    onClick={() => handleEdit(e1)}
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
      </div>
    );
  }
export default App;
