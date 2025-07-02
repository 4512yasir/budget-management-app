const API_URL = "http://127.0.0.1:5000"; // Adjust if your backend URL is different

// Get all expenses
export async function fetchExpenses() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/expenses`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
}

// Create a new expense
export async function createExpense(data) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Update an expense
export async function updateExpense(id, data) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/expenses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Delete an expense
export async function deleteExpense(id) {
  const token = localStorage.getItem("token");
  await fetch(`${API_URL}/expenses/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
}
