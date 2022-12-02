import * as React from "react";
import Form from "./components/form/Form";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import SecondStep from "./components/secondStep/SecondStep";
import Tabs from "./Tabs";
const theme = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="bg-gray-200 w-screen min-h-screen h-full py-10">
          <Form />
          {/* <Tabs/> */}
        </div>
    </ThemeProvider>
    </CacheProvider>
  );
}
