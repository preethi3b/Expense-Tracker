import React from 'react';
import './App.css';

function ExpenseList({ expenses }) {
  return (
    <table className='li'>
      <thead>
        <tr>
        <td> Discription</td>
        <td>Money spend</td>
        </tr>
      </thead>
      <tbody>      
      {expenses.map((expense, index) => (
        <tr key={index}>
          <td>{expense.description} </td>
          <td>Rs.{expense.amount}</td>
        </tr>
      ))}
    </tbody>
    </table>
  );
}

export default ExpenseList;
