import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./universalComponents/Button";

type dataType = {
  body: string;
  id: number;
  title: string;
  user: number;
};

function App() {
  const [data, setData] = useState<Array<dataType>>([]);
  const getMeData = () => {
    setData([]);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((r) => r.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      <Button name={"CLEAN DATA"} callback={getMeData} />
      <ul>
        {data.map((el) => {
          return (
            <li key={el.id}>
              <span>{el.id}</span>
              <span>{el.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
