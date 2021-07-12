import React from "react";
import { ipcRenderer as ipc } from "electron";

import { VscChromeClose as Close } from "react-icons/vsc";
import { VscChromeMaximize as Maximize } from "react-icons/vsc";
import { VscChromeRestore as RestoreDown } from "react-icons/vsc";
import { VscChromeMinimize as Minimize } from "react-icons/vsc";

import "../components/Titlebar.css";

const Titlebar = () => {
  const closeApp = () => {
    ipc.send("closeApp");
  };

  const maximizeApp = () => {
    ipc.send("maximizeApp");
  };

  const restoreDownApp = () => {
    ipc.send("restoreDownApp");
  };

  const minimizeApp = () => {
    ipc.send("minimizeApp");
  };

  return (
    <div className="titlebar">
      <div className="titlebar__content">
        <div className="title">Deals App</div>
        <div className="buttons">
          <button className="minimize" onClick={minimizeApp}>
            <Minimize size={16} color={"white"} />
          </button>
          <button className="maximize" onClick={maximizeApp}>
            <Maximize size={16} color={"white"} />
          </button>
          <button className="close" onClick={closeApp}>
            <Close size={16} color={"white"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Titlebar;
