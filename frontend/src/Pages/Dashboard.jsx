// src/Pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { fetchBudgets } from '../Services/budgetService';
import { fetchExpenses } from '../Services/expenseService';
import '../css/Pages.css';

function Dashboard() {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    const budgetsData = await fetchBudgets();
    const expensesData = await fetchExpenses();
    setBudgets(budgetsData);
    setExpenses(expensesData);
  };

  const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const balance = totalBudget - totalExpenses;

  const recentExpenses = expenses.slice(-5).reverse();

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard 🎉</h1>
      <p>Manage your budgets, track your expenses, and stay financially focused!</p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Budget</h3>
          <p>${totalBudget}</p>
        </div>
        <div className="card">
          <h3>Total Expenses</h3>
          <p>${totalExpenses}</p>
        </div>
        <div className="card">
          <h3>Balance</h3>
          <p style={{ color: balance >= 0 ? 'green' : 'red' }}>${balance}</p>
        </div>
      </div>

      <div className="recent-transactions">
        <h2>Recent Expenses</h2>
        {recentExpenses.length > 0 ? (
          <ul>
            {recentExpenses.map((expense) => (
              <li key={expense.id}>
                {expense.name} - ${expense.amount} ({expense.category})
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent expenses</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
