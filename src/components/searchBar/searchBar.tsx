"use client";

import { useState } from "react";
import styles from "./searchBar.module.scss";
import { icons } from "@/utils/icons";
import SVGIcon from "../svgIcon/svgIcon";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.searchBar}>
      <SVGIcon
        paths={icons.search.paths}
        fill={icons.search.fill}
        width={icons.search.width}
        height={icons.search.height}
        className={styles.searchBar__icon}
      />
      <input
        type="text"
        className={styles.searchBar__input}
        placeholder="Search GitHub username…"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className={styles.searchBar__button}
        // style={{
        //   backgroundColor: `${inputValue.length > 0 ? "#60abff" : ""}`,
        // }}
      >
        Search
      </button>
    </div>
  );
}
