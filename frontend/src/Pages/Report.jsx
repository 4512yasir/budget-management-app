import React, { useState, useEffect } from 'react';
import { fetchBudgets } from '../Services/budgetService';
import { fetchExpenses } from '../Services/expenseService';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Reports() {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const budgetData = await fetchBudgets();
    const expenseData = await fetchExpenses();
    setBudgets(budgetData);
    setExpenses(expenseData);
  };

  const data = budgets.map(budget => {
    const totalExpense = expenses
      .filter(exp => exp.budget_id === budget.id)
      .reduce((sum, exp) => sum + exp.amount, 0);
    return { name: budget.name, Budget: budget.amount, Expenses: totalExpense };
  });

  return (
    <div className="dashboard-container">
      <h1>Reports</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Budget" fill="#60a5fa" />
          <Bar dataKey="Expenses" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Reports;
