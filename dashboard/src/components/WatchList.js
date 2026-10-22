import React, { useContext, useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {

  const labels = watchlist.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets : [
      {
        label : "Price",
        data : watchlist.map((stock) => stock.price),
         backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
      }
    ]
  }



  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return(
          <WatchListItem key={index} stock={stock} /> 
          )
        })}
      </ul>

      <DoughnutChart data = {data} />
    </div>
  );
};

export default WatchList;


const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li className="list-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className = "item">
        <p className ={stock.isDown? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ): (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );  
}

const WatchListActions = ({uid}) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  return(
    <span className="actions">

    <span>
      <Tooltip
      title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={() => openBuyWindow(uid)}>Buy</button>
      </Tooltip>

      <Tooltip
      title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell" onClick={() => openSellWindow(uid)}>Sell</button>
      </Tooltip>

      <Tooltip
      title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlinedIcon className="icon" />
        </button>

      </Tooltip>

      <Tooltip
      title="More" placement="top" arrow TransitionComponent={Grow}>
         <button className="action">
          <MoreHorizIcon className="icon" />
        </button>
      </Tooltip>

    </span>

    </span>
  )
}