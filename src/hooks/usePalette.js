import { useState, useEffect } from "react";

import {
  THEME,
  THEME_PALETTE_LIGHT,
  THEME_PALETTE_DARK,
  THEME_PALETTE_INCHARGE,
} from "../constants";

import useTheme from "./useTheme";

const usePalette = () => {
  const { theme } = useTheme();

  const [palette, setPalette] = useState(THEME_PALETTE_LIGHT);

  useEffect(() => {
    if (theme === THEME.DARK) {
      setPalette(THEME_PALETTE_DARK);
    } else {
      setPalette(THEME_PALETTE_LIGHT);
    }
  }, [theme]);
  useEffect(() => {
    if (theme === THEME.INCHARGE) {
      setPalette(THEME_PALETTE_INCHARGE);
    } else {
      setPalette(THEME_PALETTE_LIGHT);
    }
  }, [theme]);

  return palette;
};

export default usePalette;
