import React, { useState } from "react";
import "./addtodo.css";
import * as API from "./API/TodoAPI";
import { useNavigate } from "react-router-dom";
const AddTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const date = dd + "/" + mm + "/" + yyyy;
    const data = {
      title,
      desc,
      date,
    };
    try {
      API.addTodo(data).then((res) => {
        alert("Added Succesfully!!");
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // <InputStyle>
    <div>
      <form>
        <h2 style={{ marginLeft: "6rem" }}>Add Item in Todo</h2>
        <input
          name="title"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
          className="inputfield"
        />
        <input
          name="desc"
          type="text"
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
          className="inputfield"
        />
        <button type="submit" className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
