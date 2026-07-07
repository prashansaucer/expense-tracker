import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <div className="balance">
        <h2>Balance</h2>
        <p>₹0</p>
      </div>

      <div className="summary">
        <div className="income">
          <h3>Income</h3>
          <p>₹0</p>
        </div>

        <div className="expense">
          <h3>Expense</h3>
          <p>₹0</p>
        </div>
      </div>

      <div className="transactions">
        <h2>Transactions</h2>
        <p>No transactions yet.</p>
      </div>

      <div className="add-transaction">
        <h2>Add Transaction</h2>

        <input
         type="text"
         placeholder="Enter title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
       />

        <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

        <button onClick={() => alert("Transaction Added!")}>Add</button>
      </div>
    </div>
  );
}

export default App;