import React from 'react';
import Style from "./Button.module.css";

export default function Button({ value, type }) {
  switch (type) {
    case "navbar":
      return (
        <button className={Style.buttonNav}>{value}</button>
      );

    case "form":
      return (
        <button className={Style.buttonHero}>{value}</button>
      );

      case "card":
      return (
        <button className={Style.buttonCard}>{value}</button>
      );

    default:
      return (
        <></>
      );
  }
}
