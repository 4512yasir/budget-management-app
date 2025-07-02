import React, { useState, useEffect } from 'react';
import { fetchExpenses, createExpense, updateExpense, deleteExpense } from '../Services/expenseService';

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '', category: '' });

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const data = await fetchExpenses();
    setExpenses(data);
  };

  const handleCreate = async () => {
    await createExpense(newExpense);
    setNewExpense({ name: '', amount: '', category: '' });
    loadExpenses();
  };

  const handleUpdate = async (id, updatedAmount) => {
    await updateExpense(id, { amount: updatedAmount });
    loadExpenses();
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  return (
    <div className="dashboard-container">
      <h1>Expenses</h1>
      <input type="text" placeholder="Name" value={newExpense.name} onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })} />
      <input type="number" placeholder="Amount" value={newExpense.amount} onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })} />
      <input type="text" placeholder="Category" value={newExpense.category} onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })} />
      <button onClick={handleCreate}>Add Expense</button>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - ${expense.amount} - {expense.category}
            <button onClick={() => handleUpdate(expense.id, prompt('New Amount:', expense.amount))}>Edit</button>
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
