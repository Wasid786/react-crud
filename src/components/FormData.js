import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import InputFields from './InputFields';


const FormData = () => {

    const pdfContentRef = useRef(null);

    useEffect(() => {
      const fetchData = async () => {
        // Fetch data or perform asynchronous operations...
    
        // After the asynchronous operations, call html2canvas
        const canvas = await html2canvas(pdfContentRef.current);
        // Rest of your code...
      };
    
      fetchData();
    }, []); // Dependency array to run the effect once when the component mounts
    
  
    const generatePdf = async () => {
      const input = pdfContentRef.current;
  
      // Ensure the element is visible and not hidden
      if (!input || input.offsetWidth === 0 || input.offsetHeight === 0) {
        console.error("Element is not visible");
        return;
      }
  
      // Capture the content with html2canvas
      const canvas = await html2canvas(input);
  
      // Create a new jsPDF instance
      const pdf = new jsPDF();
      const pdfHeight = (canvas.height * 210) / canvas.width;
  
      // Add the captured image to the PDF
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, pdfHeight);
  
      // Save or open the generated PDF
      pdf.save('generated-pdf.pdf');
    };
  return (
    <div className="relative w-210mm h-350mm mx-auto max-w-[1080px] max-h-full ">
    <div ref={pdfContentRef} className="w-210mm h-400mm  px-9 pt-4  ">
          
      {/* navbar  */}
      <nav className=' '>
        {/* // logo and name  */}
        <div className='flex'>
          <img className=' h-20 w-32 my-auto' src="./assets/wecarelb.jpg" alt="" />
          <div className='flex flex-col mx-auto'>
            <h1 className=' text-5xl pb-1 md:text-8xl text-blue-900 font-Yellowtail'>We Care
            </h1>
            <h3 className='text-2xl md:text-4xl text-blue-900 font-Yellowtail mr-16'> Women & Children's Clinic</h3>
          </div>

        </div>
      </nav>
      {/* // about dr asim and body */}

      {/* /// about   dr asim  */}
      <div className='flex flex-col md:flex-row  justify-between my-0'>
        {/* left part  */}
        <div className='text-xs font-semibold'>
          <p>Ex. Sr. Registrar</p>
          <p>JNMC, AMU ,Aligarh</p>
          <p>Holy, Family Hospital, New Delhi</p>
          <p>Clinical Associate:</p>
          <p>Mool Chand Hospital, New Delhi</p>
        </div>
        <div>
          {/* // right part  */}
          <div className='flex flex-col  items-end  font-semibold'>
            <h2 className='text-red-600 font-bold text-xl '>Dr. Mohd Asim</h2>
            <p className='text-xs'>(MBBS, DCH, DNB)</p>
          </div>
          <div className='text-xs  font-semibold pb-2'>
            <p>Consultant:</p>
            <p>Dept. of Pediatrics Kailash Hospital Khurja</p>
            <p>New Born and Child Specialist</p>
            <div>
              <p>Registration No, : UPMC/61558, DMC/41640 </p>
            
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* // header part  */}
        <div>
          {/* address and    */}
          <div>
            <hr className="h-px   bg-gray border-0 dark:bg-gray-700" />
            <p className='text-xs text-center  font-semibold leading-3'>Khawaja Chawk, Sarai Main,Aligarh - 202001</p>
            <hr class="h-px  my-1.5 bg-gray border-0 dark:bg-gray-700" />
          </div>
          {/* input fields  */}
          <InputFields/>
          <hr className="h-full  bg-gray border-0 border-r-2 dark:bg-gray-700 z-[-1]" />

          {/* /// Hero part  */}
          {/* /// agar height adjust karni hai tow yahan karna hai  */}
          <div className="container flex h-screen relative">
            {/* Background Image */}
            <div className='absolute inset-0'>
              <img src="./assets/wecarebg.png" className='h-80 w-120 object-cover mx-auto  mt-72  opacity-15' alt="" />
            </div>

            <div className="w-1/2 flex  h-screen  flex-col justify-between  relative z-10">
             
                {/* Content for the first half-width div */}
                <div className='p-4'>
                  <div className='space-y-28 '>
                    <h1 className=' underline font-bold'>Present Complaints</h1>
                 <div className=''>
                 <div className='space-y-4  '>
                    <h1 className=' underline font-bold'>Past History</h1>
                  <h1 className=' underline font-bold'>Family History</h1>
                  <h1 className=' underline font-bold'>Dietary History</h1>
                  <h1 className=' underline font-bold'>Development History</h1>
                  <h1 className=' font-semibold'>Allergy (if any)</h1>
                  <h1 className=' underline font-bold'>General Examination</h1>
                   <div className='flex justify-between  '>
                   <h1>B.P</h1>
                    <h1>Temp</h1>
                    <h1>H.R</h1>
                    <h1>R.R</h1>
                   </div>

                   <h1 className=' underline font-bold'>Anthrometry</h1>
                   <div className='flex justify-between'>
                   <h1>Height/length</h1>
                    <h1>H.O</h1>
                    <h1>Weight</h1>
                   </div>
                   <h1 className=' underline font-bold'>Systemic Examination</h1>
                  </div>
                  
                 </div>
                  </div>
                  
                </div>
            

              <div>
                    <h1 className=' underline font-bold mb-2'>Pain Score</h1>
                    <img className='h-20 ' src="./assets/pain_scale.png" alt="" />
                  </div>
            </div>
              {/* // divider  */}
            <div className="border-l border-gray-400 z-20"></div>

            <div className="w-1/2  h-screen flex flex-col relative z-10">
              <div className="flex-grow flex flex-col justify-between p-4">
                {/* Content for the second half-width div */}
                <div className='space-y-20  underline font-bold'>
                  <div className=' space-y-5'>
                    <h1>Provisional</h1>
                    <h1>Investigation</h1>
                  </div>
                  <h1>Treatment</h1>
                </div>
                <h1 className=' underline font-bold'> Follow Up Visit</h1>

              </div>
            </div>

            
          </div>
        </div>

      </div>
      


    </div>
    {/* button  */}
    <div className='max-h-full min-w-full relative flex justify-evenly'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
          Cancel
        </button>
        <button onClick={generatePdf} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
          Submit
        </button>
      </div>
          </div>
  )
}

export default FormData
