import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const addTransaction = () => {
    if (title === "" || amount === "") {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setTitle("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = income + expense;

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <div className="balance">
        <h2>Balance</h2>
        <p>₹{balance}</p>
      </div>

      <div className="summary">
        <div className="income">
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>

        <div className="expense">
          <h3>Expense</h3>
          <p>₹{Math.abs(expense)}</p>
        </div>
      </div>

      <div className="transactions">
        <h2>Transactions</h2>

        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <span>
                  {transaction.title} - ₹{transaction.amount}
                </span>

                <button
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
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

        <p>Use a positive amount for Income.</p>
        <p>Use a negative amount for Expense.</p>

        <button onClick={addTransaction}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default App;