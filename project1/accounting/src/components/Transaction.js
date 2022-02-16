import Item from "./Item.js";
import "./Transaction.css";
const Transaction = () => {
  const data = [
    { id: 1, name: "ค่าเหล้าเรียน", amount: 2000 },
    { id: 2, name: "ค่าเรียน", amount: 4000 },
    { id: 3, name: "ค่ารักเจ้า", amount: 3000 },
    { id: 4, name: "เงินเดือน", amount: 52000 },
    { id: 5, name: "เงินฝิ่น", amount: 35000 },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        return (
          <Item name={element.name} amount={element.amount} key={element.id} />
        );
      })}
    </ul>
  );
};

export default Transaction;
