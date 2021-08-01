import React, { CSSProperties } from "react";

import "../components/GameCell.css";

import { sampleGame } from "../../shared/types/Game";
import {
  HIGHER_DISCOUNT_LOWEST_VALUE,
  MIDDLE_DISCOUNT_LOWEST_VALUE,
} from "../../shared/data/discountRanges";
import toNormalDate from "../../shared/utils/dateConvertor";
import SteamIcon from "../../assets/storeIcons/steamIcon.png";
import MetacriticIcon from "../../assets/metacriticIcon.png";

const GameCell = () => {
  const higherDiscount: CSSProperties = {
    background: "linear-gradient(#52D963, rgba(0,0,0,0.4))",
  };

  const middleDiscount: CSSProperties = {
    background: "linear-gradient(yellow, rgba(0,0,0,0.4))",
  };

  const lowerDiscount: CSSProperties = {
    background: "linear-gradient(red, rgba(0,0,0,0.4))",
  };

  const getDiscountLblStyle = (): CSSProperties => {
    const discount: number = parseInt(sampleGame[0].discount);

    if (discount > HIGHER_DISCOUNT_LOWEST_VALUE) return higherDiscount;
    else if (discount > MIDDLE_DISCOUNT_LOWEST_VALUE) return middleDiscount;
    return lowerDiscount;
  };

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
            <a href="#" className="game-title">
              {sampleGame[0].title}
            </a>
            <p className="release-date">
              Released : {toNormalDate(sampleGame[0].releaseDate)}
            </p>
          </div>
        </div>

        <div className="middle">
          <img src={SteamIcon} alt="Store Icon" className="store-icon" />
          <div className="metacritic-score">
            <img src={MetacriticIcon} alt="Metacritic Icon" />
            <label>{sampleGame[0].metacriticScore}</label>
          </div>
          <label className="discount" style={getDiscountLblStyle()}>
            {sampleGame[0].discount}%
          </label>
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
