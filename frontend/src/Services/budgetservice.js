const API_URL = "http://127.0.0.1:5000";

export async function fetchBudgets() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/budgets`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
}

export async function createBudget(data) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/budgets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function updateBudget(id, data) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/budgets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteBudget(id) {
  const token = localStorage.getItem("token");
  await fetch(`${API_URL}/budgets/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
}
