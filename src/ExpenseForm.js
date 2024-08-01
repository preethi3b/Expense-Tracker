import React, { useState } from 'react';

import './App.css';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const[mess,setmess]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addExpense({ description, amount: Number(amount) });    
    setDescription('');
    setAmount('');
    setmess('Check Below ↓');        
    if (description && amount){
        setTimeout(()=>
        setmess(''),3000)        
    }    
    else{
        setTimeout(()=>
      setmess('invalid input'),500)
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Description</label>
      &nbsp;
      <input
        type="text"
        placeholder="Text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br></br>
      <label>Money spend</label>
      &nbsp;
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <br></br>      
      <button type="submit" > Add Expense</button>
     <br></br>
     {mess && <p>{mess}</p>}
    
    </form>
  );
}

export default ExpenseForm;
