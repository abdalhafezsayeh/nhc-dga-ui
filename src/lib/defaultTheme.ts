const defaultTheme: Theme = {
  direction: "ltr",
  fontFamily: "IBM Plex Sans",
  textColor: "#161616",
  textOnColor: "#FFFFFF",
  palette: {
    neutral: {
      25: "#FCFCFD",
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D2D6DB",
      400: "#9DA4AE",
      500: "#6C737F",
      600: "#4D5761",
      700: "#384250",
      800: "#1F2A37",
      900: "#111927",
      950: "#0D121C",
      light: "#D2D6DB",
      main: "#6C737F",
      dark: "#384250",
      contrastText: "#FFF",
    },
    primary: {
      25: "#F7FDF9",
      50: "#F3FCF6",
      100: "#DFF6E7",
      200: "#B8EACB",
      300: "#88D8AD",
      400: "#54C08A",
      500: "#25935F",
      600: "#1B8354",
      700: "#166A45",
      800: "#14573A",
      900: "#104631",
      950: "#092A1E",
      light: "#54C08A",
      main: "#1B8354",
      dark: "#14573A",
      contrastText: "#FFF",
    },
    secondary: {
      25: "#FFFEF7",
      50: "#FFFEF2",
      100: "#FFFCE6",
      200: "#FCF3BD",
      300: "#FAE996",
      400: "#F7D54D",
      500: "#F5BD02",
      600: "#DBA102",
      700: "#B87B02",
      800: "#945C01",
      900: "#6E3C00",
      950: "#472400",
      light: "#F7D54D",
      main: "#DBA102",
      dark: "#945C01",
      contrastText: "#0D121C",
    },
    error: {
      25: "#FFFBFA",
      50: "#FEF3F2",
      100: "#FEE4E2",
      200: "#FECDCA",
      300: "#FDA29B",
      400: "#F97066",
      500: "#F04438",
      600: "#D92D20",
      700: "#B42318",
      800: "#912018",
      900: "#7A271A",
      950: "#55160C",
      light: "#FDA29B",
      main: "#F04438",
      dark: "#B42318",
      contrastText: "#FFF",
    },
    warning: {
      25: "#FFFCF5",
      50: "#FFFAEB",
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",
      500: "#F79009",
      600: "#DC6803",
      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E",
      950: "#4E1D09",
      light: "#FEC84B",
      main: "#F79009",
      dark: "#B54708",
      contrastText: "#0D121C",
    },
    info: {
      25: "#F5FAFF",
      50: "#ECFDF3",
      100: "#D1E9FF",
      200: "#B2DDFF",
      300: "#84CAFF",
      400: "#53B1FD",
      500: "#2E90FA",
      600: "#1570EF",
      700: "#175CD3",
      800: "#1849A9",
      900: "#194185",
      950: "#102A56",
      light: "#84CAFF",
      main: "#2E90FA",
      dark: "#175CD3",
      contrastText: "#FFF",
    },
    success: {
      25: "#F6FEF9",
      50: "#ECFDF3",
      100: "#DCFAE6",
      200: "#ABEFC6",
      300: "#75E0A7",
      400: "#47CD89",
      500: "#17B26A",
      600: "#079455",
      700: "#067647",
      800: "#085D3A",
      900: "#074D31",
      950: "#053321",
      light: "#75E0A7",
      main: "#17B26A",
      dark: "#067647",
      contrastText: "#FFF",
    },
  },
  typography: {
    h1: {
      fontSize: "72px",
      lineHeight: "90px",
    },
    h2: {
      fontSize: "60px",
      lineHeight: "72px",
    },
    h3: {
      fontSize: "48px",
      lineHeight: "60px",
    },
    h4: {
      fontSize: "36px",
      lineHeight: "44px",
    },
    h5: {
      fontSize: "30px",
      lineHeight: "38px",
    },
    h6: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    xl: {
      fontSize: "20px",
      lineHeight: "30px",
    },
    lg: {
      fontSize: "18px",
      lineHeight: "28px",
    },
    md: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    sm: {
      fontSize: "14px",
      lineHeight: "20px",
    },
    xs: {
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
  elevation: {
    shadows: {
      xs: "box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, .05);",
      sm: "box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, .06), 0px 1px 3px 0px rgba(16, 24, 40, .1);",
      md: "box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, .06), 0px 4px 8px -2px rgba(16, 24, 40, .1);",
      lg: "box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, .03), 0px 12px 16px -4px rgba(16, 24, 40, .08);",
      xl: "box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, .03), 0px 20px 24px -4px rgba(16, 24, 40, .08);",
      "2xl": "box-shadow: 0 24px 48px -12px #1018282e;",
      "3xl": "box-shadow: 0 32px 64px -12px #10182824;",
    },
    backdropBlur: {
      sm: "filter: blur(8px);-webkit-filter: blur(8px);",
      md: "filter: blur(16px);-webkit-filter: blur(16px);",
      lg: "filter: blur(24px);-webkit-filter: blur(24px);",
      xl: "filter: blur(40px);-webkit-filter: blur(40px);",
    },
  },
  raduises: {
    none: "0",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },
  breakPoints: {
    lg: 1280,
    md: 768,
    sm: 375,
  },
};

export default defaultTheme;
