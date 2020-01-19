import React from "react";
import { headerComponentStyle } from "./header_component_style";

export const HeaderComponent = () => {
  return (
    <div className={headerComponentStyle({})}>
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">Richie</p>

          <ul className="content__container__list">
            <li className="content__container__list__item">text editor !</li>
            <li className="content__container__list__item">meme generator !</li>
            <li className="content__container__list__item">text editor !</li>
            <li className="content__container__list__item">meme generator !</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
