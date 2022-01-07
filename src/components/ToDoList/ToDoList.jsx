import React from "react";
// import ToDoListContainer from "./containers/ToDoListContainer";
import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = (onChange, toDo) => {
  return (
    <div id="Home">
      <div className="header">To do List</div>
      <form className="search">
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="검색할 투두를 입력하세요"
        />
        <button>검색</button>
      </form>
      <div className="to-do-list">
        <ToDoListItem />
      </div>
      <form className="add">
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 입력하세요"
        />
        <button>추가</button>
      </form>
    </div>
  );
};

export default ToDoList;
