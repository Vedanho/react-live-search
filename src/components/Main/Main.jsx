import React, { useState } from "react";
import "./Main.css";

const Main = (props) => {
  const [description, setDescription] = useState(false);

  const showDetails = () => {
    setDescription(true);
  };

  const closeDetails = () => {
    setDescription(false);
  };

  return (
    <div className="main_conteiner">
      <div className="img_conteiner">
        <img src={props.img} alt="photo of sneak" className="img"></img>
      </div>
      <div className="text_button_conteiner">
        <div className="text">
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
        <div className="button_details">
          <button onClick={showDetails}>Детали</button>
          {description && (
            <div className="details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis veritatis deleniti rem harum dicta
              <button className="remove-button" onClick={closeDetails}>
                x
              </button>
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Main;
