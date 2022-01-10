import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import EditToDo from "../EditToDo";

const EditToDoContainer = (props) => {
  const editInputRef = useRef();
  const [input, setInput] = useState();
  const navigate = useNavigate();
  const item = props;

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const saveClick = () => {
    // const item = { uuid: uuid, content: input };
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
