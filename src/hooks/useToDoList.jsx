import { useState, useEffect } from "react";

export default function useToDoList() {
  const [items, setItems] = useState([]);

  //저장된 문자열을 JSON으로 변환하여 list에 배열로 저장 함수 호출할 때 1번 만 실행됨
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("@list") || "[]"));
  }, []);

  // list의 내용이 바뀔 때마다 바뀐 값을 문자열로 저장
  useEffect(() => {
    localStorage.setItem("@list", JSON.stringify(items));
  }, [items]);
  return { items, setItems };
}
