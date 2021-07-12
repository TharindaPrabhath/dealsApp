import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import "../assets/fonts/agency-fb.ttf";
import "../renderer/index.css";

import Sidebar from "./components/Sidebar";
import About from "./screens/About";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Store from "./screens/Store";

import "../renderer/components/Sidebar.css";
import Titlebar from "./components/Titlebar";

const App: React.FC = () => (
  <>
    <Router>
      <Sidebar />
      <div className="content">
        <Titlebar />
        <Route path={"/"} component={Home} />
        <Route path={"/store"} component={Store} />
        <Route path={"/about"} component={About} />
        <Route path={"/settings"} component={Settings} />
      </div>
    </Router>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
