import React from "react";
import "./css/index.css";

const EditToDo = ({ editInput, handleInput, saveClick, cancleClick }) => {
  return (
    <div className="Edit">
      <h1>수정하기</h1>
      <input
        className="editInput"
        type="text"
        value={editInput}
        onChange={handleInput}
      />
      <div>
        <button onClick={saveClick}>저장</button>
        <button onClick={cancleClick}>취소</button>
      </div>
    </div>
  );
};

export default EditToDo;
