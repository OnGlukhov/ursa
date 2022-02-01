import styles from "./Size.module.sass";
// import { category } from '../../data/category'

export default function Size({ filterProducts, category, indexItem, button }) {

  return (
    <ul className={styles.size_list}>
      {/* <li
        onClick={() => {
          filterProducts(false);
          indexItem(null);
        }}
        className={
          null === button
            ? `${styles.active} ${styles.size_list_item}`
            : styles.size_list_item
        }
      >
        Все
      </li> */}
      {category.map((item, index) => (
        <div key={index} className={styles.size_wrapper}>
          <li
            onClick={() => {
              filterProducts(item.value);
              indexItem(index);
            }}
            className={
              index === button
                ? `${styles.active} ${styles.size_list_item}`
                : styles.size_list_item
            }
          >
            <a>{item.value}</a>
          </li>
        </div>
      ))}
    </ul>
  );
}
