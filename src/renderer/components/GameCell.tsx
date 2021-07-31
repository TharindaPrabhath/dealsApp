import React from "react";

import "../components/GameCell.css";

import { sampleGame } from "../../shared/types/Game";
import SteamIcon from "../../assets/storeIcons/steamIcon.png";

const GameCell = () => {
  return (
    <div className="gamecell">
      <div className="gamecell__content">
        <div className="left">
          <img
            src={sampleGame[0].thumbnail}
            alt="Game Thumbnail"
            className="thumb"
          />

          <div className="description">
            <a href={""} className="title">
              {sampleGame[0].title}
            </a>
            <p className="release-date">
              Released : {sampleGame[0].releaseDate}
            </p>
          </div>
        </div>

        <div className="middle">
          <img src={SteamIcon} alt="Store Icon" className="store-icon" />
          <label className="discount">{sampleGame[0].discount}%</label>
        </div>

        <div className="right">
          <h4 className="normal-price">${sampleGame[0].normalPrice}</h4>
          <h3 className="sale-price">${sampleGame[0].salePrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameCell;
