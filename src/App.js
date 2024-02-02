import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import FormCard from './components/FormCard';
import FormData from './components/FormData';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import OutputCard from './components/OutputCard';
import { MdClose } from 'react-icons/md';
// import InputFields from './InputFields';

axios.defaults.baseURL = "http://localhost:8080/"

function App() {
  const [addSection, setAddSection] = useState(false)
  const [editSection, setEditSection] = useState(false)
  const [formData, setformData] = useState({
    mobile: "",
    name: "",
    dob: "",
    sex: "",
    age: "",
    fname: "",
    weight: "",
    address: "",
  })

  const [formDataEdit, setformDataEdit] = useState({
    mobile: "",
    name: "",
    dob: "",
    sex: "",
    age: "",
    fname: "",
    weight: "",
    address: "",
    _id: "",
  })


  const [dataList, setDataList] = useState([]);
  const [searchResultsFound, setSearchResultsFound] = useState(true);

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setformData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    const data = await axios.post("/create", formData)
    console.log(data)
    if (data.data.success) {
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
      setformData({
        phone: "",
        name: "",
        dob: "",
        sex: "",
        age: "",
        fname: "",
        weight: "",
        address: "",
      })
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

  const getSearchResults = async (input) => {
    try {
      const inputData = input;
      const response = await axios.get(`/?search_query=${inputData}`);

      if (response.data.success) {
        setDataList(response.data.data);
        setSearchResultsFound(response.data.data.length > 0);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    getFetchData()
  }, [])

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id)
    if (data.data.success) {
      getFetchData()
      alert(data.data.message)
    }
  }

  const handleUpdate = async (e) => {
    //  e.preventDefault()
    const data = await axios.put("/update/", formDataEdit)
    if (data.data.success) {
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
    }
  }
  const handleEditOnChange = async (e) => {
    const { value, name } = e.target
    setformDataEdit((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  const handleEdit = (e1) => {
    setformDataEdit(e1)
    setEditSection(true)
  }

  return (
    <div className="App  min-h-screen p-4">
      <div className="container mx-auto">

        <div className='flex justify-between'>
          <button
            className="btn btn-add bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setAddSection(true);
            }}
          >
            Add
          </button>
          <div className='close-btn' onClick={() => { setAddSection(false); setEditSection(false) }}> <MdClose /> </div>

        </div>

        {addSection && (
          <FormData
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose={() => setAddSection(false)}
            rest={formData}
          />
        )}
        {editSection && (
          <FormData
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}

        {
          !addSection && (
            <OutputCard dataList={dataList} handleEdit={handleEdit} handleDelete={handleDelete} getSearchResults={getSearchResults} searchResultsFound={searchResultsFound} />
          )
        }

      </div>
    </div>



  );
}
export default App;