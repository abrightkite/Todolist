import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditToDo from "../EditToDo";
import useToDoList from "../../../hooks/useToDoList";

const EditToDoContainer = () => {
  const params = useParams();
  const { items, setItems } = useToDoList();
  const [editInput, setEditInput] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setEditInput(e.target.value);
    console.log(editInput);
  };

  const saveClick = () => {
    const updateList = [...items];

    setItems(
      updateList.map((item) => ({
        ...item,
        content: item.uuid === params.uuid ? item.content : editInput,
      }))
    );

    console.log(
      updateList.map((item) => ({
        ...item,
        content: item.uuid === params.uuid ? item.content : editInput,
      }))
    );

    navigate(-1);
  };

  const cancleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setEditInput(params.content);
  }, []);

  return (
    <EditToDo
      editInput={editInput}
      handleInput={handleInput}
      saveClick={saveClick}
      cancleClick={cancleClick}
    />
  );
};

export default EditToDoContainer;
