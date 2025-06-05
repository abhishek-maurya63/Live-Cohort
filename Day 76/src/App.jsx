import React from "react";
import { useState } from "react";
const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam kr le kuch", isCompleted: false },
  ]);

  const [title, settitle] = useState("");
  const [isCompleted, setisCompleted] = useState(false);
  const [gender, setgender] = useState("male");

  return (
    <div>
      <h1>Create Tasks</h1>
      <form>
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <input
          onChange={(e) => {
            setisCompleted(e.target.value);
          }}
          checked={isCompleted}
          type="checkbox"
        />
        Completed


        <br />
        <br />
        <input
          onChange={(e) => {
            setgender(e.target.value);
          }}
          
          value="male"
          type="radio"
        />{" "}
        male
        <input
          onChange={(e) => {
            setgender(e.target.value);
          }}
          value="female"
          type="radio"
        />{" "}
        female
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
