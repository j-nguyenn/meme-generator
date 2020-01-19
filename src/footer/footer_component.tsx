import React from "react";
import { css } from "emotion";
import { BRIGHT } from "../constant/colors";
export const footerComponentStyle = () =>
  css`
    label: footer-wrapper;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      padding-bottom: 8px;
    }
    a {
      text-decoration: none;
      color: ${BRIGHT.BRIGHT_1};
    }
  `;
export const FooterComponent = () => {
  return (
    <footer className={footerComponentStyle()}>
      <img src="https://media0.giphy.com/media/mVJ5xyiYkC3Vm/giphy.gif?cid=790b7611ad2812b1ccf7f99cf2e9764d8ac87928c092140a&rid=giphy.gif" />
      <small>
        © 2020 by
        <a href="https://huocha.github.io/meme-generator/">JASMINE NG </a>{" "}
      </small>
    </footer>
  );
};
