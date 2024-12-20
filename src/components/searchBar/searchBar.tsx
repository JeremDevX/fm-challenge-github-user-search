"use client";

import { useEffect, useState } from "react";
import styles from "./searchBar.module.scss";
import { icons } from "@/utils/icons";
import SVGIcon from "../svgIcon/svgIcon";
import { UserCardProps } from "../userCard/userCard";

export default function SearchBar({
  onSearchResults,
}: {
  onSearchResults: (data: UserCardProps["user"]) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error, setError] = useState(false);

  const fetchUser = (username?: string) => {
    if (inputValue.length > 0 || username) {
      setButtonDisabled(true);

      fetch(
        `https://api.github.com/users/${
          username ? username : inputValue.trim()
        }`
      )
        .then((response) => {
          if (!response.ok) {
            setError(true);
            throw new Error("Network response was not ok or user not found");
          }
          return response.json();
        })
        .then((data) => {
          onSearchResults(data);
          console.log("Data: ", data);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();

    if (buttonDisabled) {
      setButtonDisabled(false);
    }
    if (error) {
      setError(false);
    }
    setInputValue(inputValue);
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchUser();
  };

  useEffect(() => {
    fetchUser("octocat");
  }, []);

  return (
    <form className={styles.searchBar} onSubmit={handleSubmitSearch}>
      <SVGIcon
        paths={icons.search.paths}
        fill={icons.search.fill}
        width={icons.search.width}
        height={icons.search.height}
        className={styles.searchBar__icon}
      />
      <label htmlFor="username" style={{ display: "none" }}>
        Search GitHub username
      </label>
      <input
        type="text"
        className={styles.searchBar__input}
        placeholder="Search GitHub username…"
        onChange={handleInputChange}
        value={inputValue}
        id="username"
        autoComplete="off"
      />
      {error && <span className={styles.searchBar__error}>No results</span>}
      <button
        className={styles.searchBar__button}
        type="submit"
        disabled={buttonDisabled}
      >
        Search
      </button>
    </form>
  );
}
