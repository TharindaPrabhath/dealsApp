import React, { PropsWithChildren } from "react";

import "../components/Sidebar.css";
import "../screens/Home.css";

import { AiOutlineMenu as Menu } from "react-icons/ai";

import {
  topSectionData,
  bottomSectionData,
} from "../../shared/data/sidebarData";
import { Link } from "react-router-dom";
import makeWindows10LikeHover from "../../shared/utils/windows10LikeHover";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

interface sidebarProps {
  onCollapse: any;
}

const Sidebar = (props: React.PropsWithChildren<sidebarProps>) => {
  const [activeSidebar, setActiveSidebar] = useState(false);

  const topLinks = useRef<any>([]);
  const bottomLinks = useRef<any>([]);

  useEffect(() => {
    props.onCollapse(!activeSidebar);
  }, [activeSidebar]);

  return (
    <div className={`sidebar ${activeSidebar ? "active" : ""}`}>
      <h4 className="app-title">Deals App</h4>
      <div className="sidebar__content">
        <div className="menu">
          <button
            onClick={() => {
              if (activeSidebar) setActiveSidebar(false);
              else setActiveSidebar(true);
            }}
          >
            <Menu color={"white"} size={24} />
          </button>
        </div>

        <div className="tabs">
          <div className="tabs__top">
            <ul>
              {topSectionData.map((item, index) => {
                return (
                  <li
                    className={item.cName}
                    key={index}
                    ref={(element) => {
                      topLinks.current.push(element);
                    }}
                    onMouseMove={(e) => {
                      makeWindows10LikeHover(e, topLinks.current[index]);
                    }}
                    onMouseLeave={() => {
                      topLinks.current[index].style.background = "transparent";
                      topLinks.current[index].style.borderImage = null;
                    }}
                  >
                    <Link to={item.path}>
                      <item.icon color={item.iconColor} size={item.iconSize} />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="tabs__bottom">
            <ul>
              {bottomSectionData.map((item, index) => {
                return (
                  <li
                    className={item.cName}
                    key={index}
                    ref={(element) => {
                      bottomLinks.current.push(element);
                    }}
                    onMouseMove={(e) => {
                      makeWindows10LikeHover(e, bottomLinks.current[index]);
                    }}
                    onMouseLeave={() => {
                      bottomLinks.current[index].style.background =
                        "transparent";
                      bottomLinks.current[index].style.borderImage = null;
                    }}
                  >
                    <Link to={item.path}>
                      <item.icon color={item.iconColor} size={item.iconSize} />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
