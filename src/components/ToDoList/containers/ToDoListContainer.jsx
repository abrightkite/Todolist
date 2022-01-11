import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToDoList from "../../../hooks/useToDoList";
import ToDoList from "../ToDoList";

const ToDoListContainer = () => {
  const { items, setItems } = useToDoList();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const addInputRef = useRef();
  const searchInputRef = useRef();
  const [searchItem, setSearchItem] = useState(null);

  //수정
  const onEditButtonPressed = (e, item) => {
    e.preventDefault();
    setIsActive(!isActive);
    navigate(`/edit/${item.uuid}/${item.content}`);
  };

  //삭제
  const onDeletedButtonPressed = (e, index) => {
    e.preventDefault();
    setIsActive(!isActive);

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
    setItems([item, ...items]);

    addInputRef.current.value = "";
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

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <ToDoList
      onEditButtonPressed={onEditButtonPressed}
      onDeletedButtonPressed={onDeletedButtonPressed}
      onToDoItemSearched={onToDoItemSearched}
      onTodoItemSubmitted={onTodoItemSubmitted}
      items={items}
      addInputRef={addInputRef}
      searchInputRef={searchInputRef}
      isActive={isActive}
    />
  );
};

export default ToDoListContainer;
