import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './App.css';
function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <header>
      <h1>Expense Tracker</h1>
      </header>
      <div className='box'>
      <ExpenseForm addExpense={addExpense} />
      </div>
      <div className='li'>
      <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
