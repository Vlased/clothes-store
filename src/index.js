import React from "react";
import ReactDom from "react-dom";
import App from "./App"
import "./index.scss"
import { HashRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./Redux/store"

ReactDom.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)