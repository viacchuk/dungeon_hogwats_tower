import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App.jsx";

bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
