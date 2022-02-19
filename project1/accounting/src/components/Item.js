import PropTypes from "prop-types";
import "../style/Item.css";
import { useContext } from "react";
import DataContext from "../data/DataContext";

const Item = (props) => {
  const { name, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <li className={status}>
      {name}
      <span>
        {symbol}
        {formatNumber(Math.abs(amount))}
      </span>
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Item;
