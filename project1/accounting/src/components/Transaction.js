import Item from "./Item.js";
import "../style/Transaction.css";

const Transaction = (props) => {
  const { items } = props;
  return (
    <ul className="item-list">
      {items.map((element) => {
        return (
          <Item name={element.name} amount={element.amount} key={element.id} />
        );
      })}
    </ul>
  );
};

export default Transaction;
