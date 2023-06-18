import React from "react";
import * as API from "../API/TodoAPI";
import { MdDelete } from "react-icons/md";
import { DragHandle } from "../partials/DragHandle";
const Singletodo = ({item}) => {
  const handleclick=(e)=>{
    e.preventDefault();
    const data={
      title:item.title,
      desc:item.desc,
      date:item.date
    }
    API.deleteTodo(data).then((res)=>{
      alert("Deleted Successfully");
    })
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between",border:"2px solid grey",width:"530px", margin:"2rem",marginTop:"0.3rem",borderRadius:"12px",backgroundColor:"#F0F0F0" }}>
      <div style={{ display: "flex",flexDirection:"row", justifyContent:"space-between" }}>
        <div style={{display:"flex",flexDirection:"column",padding:"0",marginLeft:"1rem"}} >

        <p><p style={{marginBottom:"-18px",marginTop:"-0.4rem",fontSize:"20px",fontFamily:"Roboto",color:"green"}}><strong>{item.title}</strong></p><br/>
        <h3 style={{fontFamily:"lato",fontWeight:200,marginLeft:"1rem"}}>{item.desc}</h3>
        <p style={{fontFamily:"lato"}}>{item.date}</p></p>
        
        
        </div>

        </div>
        <div style={{margin:"1rem",marginTop:"4rem"}}>
          
        <button style={{padding:0,fontSize:"28px"} } onClick={handleclick}><MdDelete color="red"/></button>
        </div>

    </div>
  );
};

export default Singletodo;
