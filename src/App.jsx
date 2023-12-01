import { useState } from "react";
import { foods } from "./data";
import "./App.css";

function App() {
  const [listFoods, setListFoods] = useState(foods);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const data = foods.filter((food) => {
      return (
        food.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        food.description.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setInput(e.target.value);
    setListFoods(data);
  };

  const convertToHiglight = (toConvert, input) => {
    let convertedText = toConvert.toLowerCase();
    let convertedInput = `<mark>${input.toLowerCase()}</mark>`;
    let result = convertedText.replace(input.toLowerCase(), convertedInput);
    return <span dangerouslySetInnerHTML={{ __html: result }}></span>;
  };

  return (
    <>
      <h1>Search</h1>
      <input type="text" onChange={onChange} />

      <table
        style={{
          marginTop: 30,
          borderCollapse: "separate",
          borderSpacing: "20px 5px",
        }}
      >
        <tbody>
          {listFoods.map((food) => {
            return (
              <tr key={food.id}>
                <td>{convertToHiglight(food.name, input)}</td>
                <td>{convertToHiglight(food.description, input)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
