import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "@/store/app";
import { Provider } from "react-redux";
import AppChackraProvider from "@/providers/AppChackraProvider";
import { NextPage } from "next";

type Props = AppProps;

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppChackraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AppChackraProvider>
  );
};

export default App;
