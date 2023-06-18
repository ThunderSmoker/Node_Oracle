import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { ListContainer, ListItem } from "./styles";
import { Container, Button } from "react-floating-action-button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import * as API from "./API/TodoAPI";
import Singletodo from "./components/Singletodo";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate=useNavigate();
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    API.fetchTodos().then((res) => {
      setList(res.data);

      console.log(res.data);
    });
  },[]);

  // const list = List.getList();
  return (
    <div className="App" style={{display:"flex",flexDirection:"column",justifyContent:"center",placeItems:"center"}}>
        <div style={{border:"5px solid blue",display:"inline-block",padding:"1rem 12rem",backgroundColor:"skyblue",borderRadius:"25px"}}>

            <h1 style={{ margin: 0, marginBottom: "2rem", color: "#0000ff" }}>
              To-do List
            </h1>
        </div>
        <div>

        {list.map((item, index) => (
          <Singletodo item={item} key={index} />
          ))}
          </div>
   


      <Container>
        <Button onClick={() => navigate('/add-todo')}>
          <AiFillPlusCircle style={{ fontSize: "3rem" }} />
        </Button>
      </Container>
    </div>
  );
};

export default DashBoard;
