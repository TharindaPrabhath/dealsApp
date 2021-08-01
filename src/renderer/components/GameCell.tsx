import React, { CSSProperties } from "react";

import "../components/GameCell.css";

import Game from "../../shared/types/Game";
import {
  HIGHER_DISCOUNT_LOWEST_VALUE,
  MIDDLE_DISCOUNT_LOWEST_VALUE,
} from "../../shared/data/discountRanges";
import toNormalDate from "../../shared/utils/dateConvertor";
import SteamIcon from "../../assets/storeIcons/steamIcon.png";
import MetacriticIcon from "../../assets/metacriticIcon.png";
import {
  HIGHER_SCORE_LOWEST_VALUE,
  MIDDLE_SCORE_LOWEST_VALUE,
} from "../../shared/data/metacriticScoreRanges";

const GameCell = ({ game }: { game: Game }) => {
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
    const discount: number = parseInt(game.discount);

    if (discount > HIGHER_DISCOUNT_LOWEST_VALUE) return higherDiscount;
    else if (discount > MIDDLE_DISCOUNT_LOWEST_VALUE) return middleDiscount;
    return lowerDiscount;
  };

  const higherScore: CSSProperties = {
    background: "#52D963",
  };

  const middleScore: CSSProperties = {
    background: "rgb(160, 132, 10)",
  };

  const lowerScore: CSSProperties = {
    background: "red",
  };

  const getMetacriticScoreLblStyle = (): CSSProperties => {
    const score: number = parseInt(game.metacriticScore);

    if (score > HIGHER_SCORE_LOWEST_VALUE) return higherScore;
    else if (score > MIDDLE_SCORE_LOWEST_VALUE) return middleScore;
    return lowerScore;
  };

  return (
    <div className="gamecell">
      <div className="gamecell__content">
        <div className="left">
          <img src={game.thumbnail} alt="Game Thumbnail" className="thumb" />

          <div className="description">
            <a href="#" className="game-title">
              {game.title}
            </a>
            <p className="release-date">
              Released : {toNormalDate(game.releaseDate)}
            </p>
          </div>
        </div>

        <div className="middle">
          <img src={SteamIcon} alt="Store Icon" className="store-icon" />
          <div className="metacritic-score">
            <img src={MetacriticIcon} alt="Metacritic Icon" />
            <label style={getMetacriticScoreLblStyle()}>
              {game.metacriticScore}
            </label>
          </div>
          <label className="discount" style={getDiscountLblStyle()}>
            {game.discount}%
          </label>
        </div>

        <div className="right">
          <h4 className="normal-price">${game.normalPrice}</h4>
          <h3 className="sale-price">${game.salePrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameCell;
