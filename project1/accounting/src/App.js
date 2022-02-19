import Transaction from "./components/Transaction.js";
import FormComponent from "./components/FormComponent.js";
import ReportComponent from "./components/ReportComponent.js";
import "./style/App.css";
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const initialState = [
    { id: 1, name: "ค่ารักเจ้า", amount: 3000 },
    { id: 2, name: "ค่ากิน", amount: -1000 },
    { id: 3, name: "เงินเดือน", amount: 52000 },
    { id: 4, name: "ค่าไฟ", amount: -5000 },
  ];
  const [items, setItems] = useState(initialState);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  // newItem คือ ค่าที่รับจาก formComponent
  const onAddNewItem = (newItem) => {
    // prevItem คือ list เดิมที่อยู่ใน setItem
    setItems((prevItem) => {
      // แสดงผลให้ newItem อยู่ด้านบนเป็นอันล่าสุด แล้วตามด้วย list เก่า
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((element) => element.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0)
      .toFixed(2);
    const expense = (
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1
    ).toFixed(2);

    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={{ color: "blue", textAlign: "center", fontSize: "1.5rem" }}>
          โปรแกรมบัญชีรายรับ - รายจ่าย
        </h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี </Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                <ReportComponent />
              </Route>
              <Route path="/insert">
                {/* ส่ง function onAddNewItem ไปใช้ในหน้า FormComponent.js */}
                <FormComponent onAddItem={onAddNewItem} />
                <Transaction items={items} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
