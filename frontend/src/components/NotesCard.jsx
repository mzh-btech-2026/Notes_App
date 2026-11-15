import { File,Calendar,Edit2Icon,Trash} from "lucide-react";
import { useState } from "react";

export default function NotesCard({

    notes,edit
}){


  
    return(
        <>

        <div className="
        
        sm:ml-[10px] sm:grid sm:grid-cols-2 mr-[20px]
        md:grid md:grid-cols-3
        lg:grid lg:grid-cols-3
        xl:grid xl:grid-cols-4
        ">
            
      { notes.map((note,index)=>{

        return(


            <div
            key={note.id}
            className="
            border w-[380px] ml-[20px] p-[20px] border-gray-200 rounded-[10px] mt-[20px]
            sm:ml-[20px] sm:w-[200px] sm:mt-[20px]
            md:ml[20px] md:w-[300px] md:shadow-xl
            xl:ml[20px] xl:w-[300px]
            2xl:ml[20px] 2xl:w-[400px]">

            {/* ---- top content ----- */}
            <div className="
            flex gap-[20px] items-center">

                <File size={40} className="
                bg-yellow-400 text-blue-800 p-[10px] rounded-[5px]
                "/>

                <p className="
                
                text-[25px] font-[600]"
                
                >{note.title}</p>

            </div>

            {/* ------ middle content ------- */}

            <div className="
            mt-[20px]">

                <p className="
                
                text-[15px] font-[500]
                ">
                    {note.description}</p>
            </div>

            {/* -------- bottom content ------ */}

             <div className="
             flex items-center justify-between">

                {/* ---- left ---- */}
                <div className="
                flex items-center gap-[10px] mt-[20px]
                ">
                   <Calendar size={20} className="
                   text-gray-400"/>
                   <p className="
                   text-gray-400 text-[12px]
                   ">
                    {note.date}</p>

                </div>

                {/* ------- right ------- */}

                <div className="
                flex items-center gap-[20px] mt-[20px]">

                    <Edit2Icon size={20} 
                    onClick={()=>edit()}
                    className="
                    text-blue-600 cursor-pointer hover:bg-blue-200 hover:rounded-[5px] hover:p-[3px]"/>
                    <Trash size={20} className="\
                    text-red-700 cursor-pointer hover:bg-red-200 hover:rounded-[5px] hover:p-[3px]"/>
                  

                </div>

            </div>


        </div>
 



        );
      })}
        
        </div>

        </>
    );
}