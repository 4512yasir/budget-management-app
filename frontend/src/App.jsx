import { Routes, Route } from 'react-router-dom';
import { useAuth } from './Auth/Authcontext.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import './App.css';
import Landing from './Pages/Landing.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import ProtectedRoute from './Auth/ProtectedRoute.jsx';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      {isAuthenticated ? <Sidebar /> : <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/budgets" element={
              <ProtectedRoute>
            <Budgets />
          </ProtectedRoute>
        } />
        <Route path="/expenses" element={
          <ProtectedRoute>
            <Expenses />
          </ProtectedRoute>
        } />
        <Route path="/reports" element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        } />

    
      </Routes>
    </div>
  );
}

export default App;
