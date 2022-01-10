import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToDoList from "../ToDoList";

const ToDoListContainer = ({ item }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [searchItem, setSearchItem] = useState(null);
  const addInputRef = useRef();
  const searchInputRef = useRef();

  //수정
  const onEditButtonPressed = (e, item) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  //삭제
  const onDeletedButtonPressed = (e, index) => {
    e.preventDefault();
    setIsActive(!isActive);

    console.log(items);

    const clone = [...items];
    clone.splice(index, 1);
    setItems(clone);
  };

  // 추가
  const onTodoItemSubmitted = (e) => {
    e.preventDefault();
    if (addInputRef.current.value === "") {
      return;
    }
    const item = {
      uuid: Date.now(),
      content: addInputRef.current.value,
    };
    addInputRef.current.value = "";
    setItems([item, ...items]);
  };

  // 검색
  const onToDoItemSearched = (e) => {
    e.preventDefault();
    if (searchInputRef === "") {
      return;
    }
    const content = searchInputRef.current.value;
    setSearchItem(content);
    searchInputRef.current.value = "";
  };

  return (
    <ToDoList
      onEditButtonPressed={onEditButtonPressed}
      onDeletedButtonPressed={onDeletedButtonPressed}
      onToDoItemSearched={onToDoItemSearched}
      onTodoItemSubmitted={onTodoItemSubmitted}
      items={items}
      searchItem={searchItem}
      addInputRef={addInputRef}
      searchInputRef={searchInputRef}
    />
  );
};

export default ToDoListContainer;
