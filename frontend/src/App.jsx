import AddNotes from "./components/AddNotes";
import Header from "./components/Header";
import NotesCard from "./components/NotesCard";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer"
import EditNotes from "./components/EditNotes"
import { useState } from "react";



export default function App() {

  const [showForm,setshowForm] = useState(false);
  const [showEdit,setshowEdit] = useState(false);


  const handleEdit = () =>{

 setshowEdit(!showEdit);
 setshowForm(false);

  }

 



  
  const handleAdd = () => {
    setshowForm(!showForm);
    setshowEdit(false);
};

const [notes,setnotes] =useState([] )

  return (
    <div>

      <Header onAdd={handleAdd}/>

      <SubHeader />

      {
        showEdit &&  
          <EditNotes cancel={handleEdit}/>
        
      } 

      {
        showForm && <AddNotes save={handleSave} cancel={handleAdd}/>
      }

      <NotesCard notes={notes} edit={handleEdit}/>

      <Footer />



      

      
    </div>
  );
}

