import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoListContainer from "../components/ToDoList/containers/ToDoListContainer";
import EditToDoContainer from "../components/EditToDo/containers/EditToDoContainer";
import CommonNavigationContainer from "./containers/CommonNavigationContainer";
//container에서 렌더링 제외 모든 것을 하고 presenter에서 렌더링만 해야함.

const RooteNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoListContainer />} />
        <Route path="/edit/:uuid" element={<EditToDoContainer />} />
        <Route path="/common" element={<CommonNavigationContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RooteNavigation;
