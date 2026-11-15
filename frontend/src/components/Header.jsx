import { NotebookPen } from "lucide-react";


export default function Header({
    onAdd
}){


    return(
        <>

        <header className="flex justify-between items-center bg-blue-400  h-[70px]">

          {/* ------------- logo ------------- */}
            <div className="flex gap-[20px]  items-center ml-[30px]">

                <NotebookPen size={50} className="
                text-yellow-400 bg-blue-800 p-[10px] rounded-[10px]
                " />
                <p className="text-white text-[25px] font-[800]">Notes App</p>

            </div>


            {/* -------- add button ------------ */}

            <div>
                <button className="bg-blue-800 text-white font-[800] p-[10px] rounded-[5px] mr-[30px] cursor-pointer hover:bg-green-600"
                onClick={onAdd}
                >+ Add Notes</button>

            </div>


        </header>
 
        </>
    );


}