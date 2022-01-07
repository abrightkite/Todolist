import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "../components/ToDoList/ToDoList";
//container에서 렌더링 제외 모든 것을 하고 presenter에서 렌더링만 해야함.

const RooteNavigation = () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <ToDoList />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RooteNavigation;
