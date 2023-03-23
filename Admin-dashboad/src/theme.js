import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#A084DC",
          700: "#3d3d3d",
          800: "#A084DC",
          900: "#A084DC",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#212121",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#121212",
        },
        greenAccent: {
          100: "#A084DC",
          200: "#A084DC",
          300: "#A084DC",
          400: "#A084DC",
          500: "#A084DC",
          600: "#A084DC",
          700: "#A084DC",
          800: "#A084DC",
          900: "#A084DC",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#A084DC",
          200: "#A084DC",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#A084DC",
          700: "#000000",
          800: "#A084DC",
          900: "#A084DC",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#A084DC",
          900: "#e0e0e0",
        },
        primary: {
          100: "#A084DC",
          200: "#A084DC",
          300: "#0c101b",
          400: "#A084DC", // manually changed
          500: "#141b2d",
          600: "#A084DC",
          700: "#727681",
          800: "#A084DC",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#A084DC",
          200: "#A084DC",
          300: "#A084DC",
          400: "#A084DC",
          500: "#A084DC",
          600: "#A084DC",
          700: "#A084DC",
          800: "#A084DC",
          900: "#A084DC",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#A084DC",
          800: "#A084DC",
          900: "#A084DC",
        },
        blueAccent: {
          100: "#A084DC",
          200: "#A084DC",
          300: "#A084DC",
          400: "#535ac8",
          500: "#A084DC",
          600: "#868dfb",
          700: "#A084DC",
          800: "#c3c6fd",
          900: "#A084DC",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
