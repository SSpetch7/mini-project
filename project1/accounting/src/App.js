import Transaction from "./components/Transaction.js";
import "./App.css";
const Title = () => (
  <h1 style={{ color: "blue", textAlign: "center", fontSize: "1.5rem" }}>
    โปรแกรมบัญชีรายรับ - รายจ่าย
  </h1>
);

function App() {
  return (
    <div className="container">
      <Title />
      <Transaction />
    </div>
  );
}

export default App;
