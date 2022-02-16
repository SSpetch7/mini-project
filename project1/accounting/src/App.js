import Transaction from "./components/Transaction.js";
import FormComponent from "./components/FormComponent.js";
import "./style/App.css";
import { useState } from "react";

const Title = () => (
  <h1 style={{ color: "blue", textAlign: "center", fontSize: "1.5rem" }}>
    โปรแกรมบัญชีรายรับ - รายจ่าย
  </h1>
);

function App() {
  const initData = [
    { id: 1, name: "ค่าเหล้าเรียน", amount: 2000 },
    { id: 2, name: "ค่าเรียน", amount: 4000 },
  ];
  const [items, setItems] = useState(initData);

  // newItem คือ ค่าที่รับจาก formComponent
  const onAddNewItem = (newItem) => {
    // prevItem คือ list เดิมที่อยู่ใน setItem
    setItems((prevItem) => {
      // แสดงผลให้ newItem อยู่ด้านบนเป็นอันล่าสุด แล้วตามด้วย list เก่า
      return [newItem, ...prevItem];
    });
  };
  return (
    <div className="container">
      <Title />
      {/* ส่ง function onAddNewItem ไปใช้ในหน้า FormComponent.js */}
      <FormComponent onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </div>
  );
}

export default App;
