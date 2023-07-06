import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Widget = ({ type }) => {
  let data;

  // temporary
  const amount = 100;
  const diff = 20

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className="icon" style={{
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            color: "crimson"
        }} />,
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: <ShoppingCartIcon className="icon" style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod"
        }} />,
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <AttachMoneyIcon className="icon" style={{
            backgroundColor: "rgba(0, 128, 0, 0.2)",
            color: "green"
        }} />,
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceIcon className="icon" style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple"
        }} />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title"> {data.title} </span>
        <span className="counter">
            {data.isMoney && "€"} {amount}
        </span>
        <span className="link"> {data.link} </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
