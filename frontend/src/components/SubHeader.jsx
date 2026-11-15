import { Search } from "lucide-react";

export default function SubHeader(){

    return(
            
        <>

        <div className="
        sm:flex sm:justify-between sm:gap-[20px] sm:mt-[30px]
        md:flex md:justify-between md:gap-[20px] md:mt-[30px]">

             {/* ------------------ left content -------------- */}
            <div>

                <p className="
                font-[700] text-center text-[25px] text-center
                sm:text-[40px] sm:ml-[40px] sm:text-left
                 md:ml-[40px] sm:text-left">
                    My Notes
                </p>

                <p className="
                font-[500] text-center text-[15px] text-gray-400
                sm:ml-[40px] sm:text-[20px] sm:text-left
                md:ml-[40px] sm:text-left">
                    All your important notes in one place
                    </p>

            </div>


            {/* ----------------- right content ------------ */}

            <div className="
            flex gap-[10px] border items-center p-[6px] rounded-[7px] border-gray-300 w-[380px] m-[20px]
            sm:mr-[80px] sm:w-[250px]
            md:mr-[150px] md:w-[300px]">

                <Search size={20} className="
                ml-[10px] cursor-pointer
                "/>
                <input type="text" placeholder="Search notes..." className="focus:outline-none placeholder:pl-[10px] text-gray-500"/>
          </div>




        </div>
 
 
        </>
    );
}