import React from "react";
// import ToDoListContainer from "./containers/ToDoListContainer";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import "./css/index.css";

const ToDoList = () => {
  return (
    <div id="Home">
      <h1 className="header">To do List</h1>
      <div className="content">
        <form className="search">
          <input type="text" placeholder="검색할 투두를 입력하세요" />
          <button>검색</button>
        </form>
        <div className="to-do-list">
          <ToDoListItem />
        </div>
        <form className="add">
          <input type="text" placeholder="할 일을 입력하세요" />
          <button>추가</button>
        </form>
      </div>
    </div>
  );
};

export default ToDoList;
