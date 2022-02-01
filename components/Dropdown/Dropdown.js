import styles from "./Dropdown.module.sass";
import React, { useState } from "react";
// import { category } from "../../data/category";

export default function Dropdown({
  filterProducts,
  indexItem,
  button,
  category
  // replaceProducts,
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_wrapper}>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.dropdown_button}
        >
          Выбрать серию
          <img
            className={isActive ? styles.dropdown_img : ""}
            src={"/images/arrow.svg"}
          ></img>
        </button>
        <div className={isActive ? styles.dropdown_menu : styles.off}>
          <ul className={styles.dropdown_menu_list}>
            {category.map((item, index) => (
              <li
                key={item.id}
                onClick={() => {
                  filterProducts(item.value);
                  indexItem(index);
                  setIsActive(!isActive);
                }}
                className={
                  index === button
                    ? `${styles.dropdown_item} ${styles.active}`
                    : `${styles.dropdown_item}`
                }
              >
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isActive ? (
        <div
          onClick={() => setIsActive(!isActive)}
          className={styles.overlay}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}
