import React, { useState, useEffect } from 'react';
import { fetchBudgets, createBudget, updateBudget, deleteBudget } from '../Services/budgetservice';

function Budgets() {
  const [budgets, setBudgets] = useState([]);
  const [newBudget, setNewBudget] = useState({ name: '', amount: '' });

  useEffect(() => {
    loadBudgets();
  }, []);

  const loadBudgets = async () => {
    const data = await fetchBudgets();
    setBudgets(data);
  };

  const handleCreate = async () => {
    await createBudget(newBudget);
    setNewBudget({ name: '', amount: '' });
    loadBudgets();
  };

  const handleUpdate = async (id, updatedAmount) => {
    await updateBudget(id, { amount: updatedAmount });
    loadBudgets();
  };

  const handleDelete = async (id) => {
    await deleteBudget(id);
    loadBudgets();
  };

  return (
    <div className="dashboard-container">
      <h1>Budgets</h1>
      <input type="text" placeholder="Name" value={newBudget.name} onChange={(e) => setNewBudget({ ...newBudget, name: e.target.value })} />
      <input type="number" placeholder="Amount" value={newBudget.amount} onChange={(e) => setNewBudget({ ...newBudget, amount: e.target.value })} />
      <button onClick={handleCreate}>Add Budget</button>

      <ul>
        {budgets.map((budget) => (
          <li key={budget.id}>
            {budget.name} - ${budget.amount}
            <button onClick={() => handleUpdate(budget.id, prompt('New Amount:', budget.amount))}>Edit</button>
            <button onClick={() => handleDelete(budget.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Budgets;
