import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditToDo from "../EditToDo";

const EditToDoContainer = () => {
  const editInputRef = useRef();
  const params = useParams();
  const [editInput, setInput] = useState(params.content);
  const navigate = useNavigate();

  console.log(params);

  useEffect(() => {}, [editInput]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const saveClick = () => {
    const item = { uuid: params.uuid, content: editInput };
    navigate("/");
  };

  const cancleClick = () => {
    navigate("/");
  };

  return (
    <EditToDo
      editInputRef={editInputRef}
      handleInput={handleInput}
      saveClick={saveClick}
      cancleClick={cancleClick}
    />
  );
};

export default EditToDoContainer;
