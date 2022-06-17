import React from "react";
import { useState } from "react";
import "../Footer/Footer.css";

const Footer = (props) => {
  const [isDisable, setIsDisable] = useState(false);

  const text_1 = "Добавить в корзину";
  const text_2 = "уже в корзине";

  const handlerClick = () => {
    setIsDisable(!isDisable);
  };

  return (
    <div className="footer_conteiner">
      <div className="text_footer">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </div>
      <div className="button_footer">
        <button disabled={isDisable} onClick={handlerClick}>
          {(!isDisable && text_1) || (isDisable && text_2)}
        </button>
        {isDisable && (
          <div className="delete">
            <button onClick={handlerClick}>Удалить из корзины</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
