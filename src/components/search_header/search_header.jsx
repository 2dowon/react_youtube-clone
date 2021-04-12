import styles from "./search_header.module.css";
import React, { useRef } from "react";

const SearchHeader = ({ onSearch, onLogoClick }) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
  };

  return (
    <form className={styles.header} onSubmit={onSubmit}>
      <button className={styles.logo} onClick={onLogoClick}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </button>
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
};

export default SearchHeader;
