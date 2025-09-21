import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./pages/register";
import Login from "./pages/login";
import AccountPage from "./pages/accountPage";
import BudgetPage from "./pages/budgetPage";
import CategoryPage from "./pages/categoryPage";
import TransactionPage from "./pages/transactionPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
