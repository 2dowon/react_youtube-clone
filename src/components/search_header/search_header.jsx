import styles from "./search_header.module.css";
import React, { memo, useRef } from "react";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
  };

  return (
    <form className={styles.header} onSubmit={onSubmit}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search..."
      />
      <button className={styles.btn}>
        <img className={styles.btnImg} src="/images/search.png" alt="search" />
      </button>
    </form>
  );
});

export default SearchHeader;
