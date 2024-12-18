"use client";

import styles from "./themeSwitch.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { icons } from "@/utils/icons";
import SVGIcon from "../svgIcon/svgIcon";

export default function ThemeSwitch() {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <button
      className={styles.themeSwitch}
      onClick={toggle}
      aria-label={`
    Switch to ${theme === "light" ? "light" : "dark"} mode`}
    >
      {theme === "light" ? "DARK" : "LIGHT"}
      <SVGIcon
        paths={theme === "light" ? icons.moon.paths : icons.sun.paths}
        fill={theme === "light" ? icons.moon.fill : icons.sun.fill}
        width={theme === "light" ? icons.moon.width : icons.sun.width}
        height={theme === "light" ? icons.moon.height : icons.sun.height}
      />
    </button>
  );
}
