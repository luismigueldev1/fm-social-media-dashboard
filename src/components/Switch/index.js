import React, { useContext } from "react";
import { ThemeContext, types } from "../../theme/ThemeProvider";
import "./styles.scss";

export default function Switch() {
  const { theme, dispatch } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    if (theme.darkMode) {
      dispatch({
        type: types.light,
      });
    } else {
      dispatch({
        type: types.dark,
      });
    }
  };

  return (
    <input
      type="checkbox"
      name="toogle"
      id="toggle"
      onChange={() => handleChangeTheme()}
    />
  );
}
