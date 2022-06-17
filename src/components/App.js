import Main from "./Main/Main";
import "../components/App.css";
import Footer from "./Footer/Footer";
import array from "../array";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const findItem = array.filter((element, index, array) => {
    if (element.name.toLowerCase().includes(inputValue.toLowerCase())) {
      return true;
    } else if (inputValue === "") {
      return array;
    }
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="input_conteiner">
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        ></input>
      </div>
      <div className="App">
        {findItem.map((element, index) => {
          return (
            <div className="card_conteiner">
              <Main
                name={element.name}
                price={element.price}
                img={element.img}
              />
              <Footer
                name={element.name}
                price={element.price}
                img={element.img}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
