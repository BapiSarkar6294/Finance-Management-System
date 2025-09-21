import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./pages/register";
import Login from "./pages/login";
import AccountPage from "./pages/accountPage";
import BudgetPage from "./pages/budgetPage";
import CategoryPage from "./pages/categoryPage";
import TransactionPage from "./pages/transactionPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
        <Route path="/budget" element={<PrivateRoute><BudgetPage /></PrivateRoute>} />
        <Route path="/category" element={<PrivateRoute><CategoryPage /></PrivateRoute>} />
        <Route path="/transaction" element={<PrivateRoute><TransactionPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
