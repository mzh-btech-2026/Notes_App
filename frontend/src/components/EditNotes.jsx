import { useEffect, useState } from "react";


export default function EditNotes({ cancel }){

    


    return(
        <>

       <div className="
       sm:flex sm:justify-center mt-[20px] mb-[20px]

       ">

          <div className="
        border border-black ml-[20px] mr-[20px] rounded-[5px] pb-[15px] bg-[#F7F5F5] border-blue-100 shadow-[0_4px_10px_rgba(0,0,0,0.2)]
        sm:w-[500px]
        
        ">

        <h2 className="
        font-[700] text-center bg-blue-800 text-white rounded-[5px]
        sm:text-[30px]
        ">
            Edit Notes
            </h2>

        {/* ---------- form field ----------- */}

        <div className="
        ml-[20px] mt-[30px]
        ">

              <label htmlFor="title" className="
        font-[600] text-[18px] pt-[20px] text-blue-900
        sm:text-[25px]">
            Title</label>

        <br />
        <input type="text" id="title" placeholder="Enter the Title"
         className="
         focus:outline-none pl-[20px] border rounded-[5px] w-[340px] h-[35px] border-blue-300 placeholder:text-gray-400
         sm:w-[450px] h-[40px]" 
        //  value={title}
        //  onChange={(e)=>setTitle(e.target.value)}
         />
        </div>


{/* ---------------- description ----------- */}

        <div className="
        ml-[20px] mt-[30px]
        ">

              <label htmlFor="title" className="
        font-[600] text-[18px] pt-[20px] text-blue-900 
        sm:text-[25px]">
            Description</label>

        <br />
        <textarea type="text" id="title" placeholder="Enter the Description"
         className="
         focus:outline-none pl-[20px] border rounded-[5px] w-[340px] h-[100px] border-blue-300  placeholder:text-gray-400
         sm:w-[450px]" 
        //  value={description}
        // onChange={(e)=>setdescription(e.target.value)}
/>
        </div>

        {/* ------ button --------- */}
        <div className="flex justify-center items-center">
            <button 
        className="
        border border-gray-300 rounded-[10px] w-[100px] h-[30px] bg-green-600 mt-[20px] cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.2)]
        "
      >
            
            Edit</button>

            <button 
        className="
        border border-gray-300 rounded-[10px] w-[100px] h-[30px] text-white bg-red-600 mt-[20px] cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.2)]
        " 
        onClick={cancel}
        >
            
            Cancel</button>
        </div>




        </div>
       </div>

        </>
    );
}