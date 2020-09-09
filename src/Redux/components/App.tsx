import { Provider } from "react-redux";
import store from "../store";
import React from "react";
import ReduxEditor from "./ReduxEditor";

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <ReduxEditor />
        </Provider>
    );
}
