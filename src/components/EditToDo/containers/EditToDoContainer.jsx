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

    const idx = items.findIndex((item) => {
      return item.uuid === params.uuid;
    });

    const editedItems = [
      ...items.slice(0, idx),
      { uuid: params.uuid, content: editInput },
      ...items.slice(idx + 1),
    ];
    setItems(editedItems);
    console.log(idx);
    // navigate(-1);
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
