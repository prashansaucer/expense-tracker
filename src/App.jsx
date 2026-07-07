import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const addTransaction = () => {
  if (title === "" || amount === "") {
    alert("Please fill all fields");
    return;
  }

  const newTransaction = {
    title,
    amount,
  };
   
  setTransactions([...transactions, newTransaction]);

  setBalance(balance + Number(amount));

   setTitle("");
   setAmount("");
};

   return(

    <div className="container">
      <h1>Expense Tracker</h1>

      <div className="balance">
        <h2>Balance</h2>
        <p>₹{balance}</p>
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

  {transactions.length === 0 ? (
    <p>No transactions yet.</p>
  ) : (
    transactions.map((transaction, index) => (
      <div key={index}>
        <p>
          {transaction.title} - ₹{transaction.amount}
        </p>
      </div>
    ))
  )}
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

        <button onClick={addTransaction}>Add</button>
      </div>
    </div>
  );
}

export default App;