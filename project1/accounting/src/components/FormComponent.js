import "../style/FormComponent.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormConponent = (props) => {
  const { onAddItem } = props; // รับ ค่าที่เก็บไว้ใน props มาคืนให้กับสมาชิกใน props (มี 1 ตัวคือ onAddItem)
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();

    const itemData = {
      id: uuidv4(),
      name: name,
      amount: Number(amount),
    };

    onAddItem(itemData); // ใช้ function ที่รับมากับค่า itemData ค่าจะส่งไปที่ App.js
    setName("");
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการของคุณ"
            onChange={inputName}
            value={name}
          ></input>
        </div>

        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input
            type="text"
            placeholder="( + รายรับ, - รายจ่าย )"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormConponent;
