const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budgetController");

// CRUD Budgets
router.post("/", budgetController.createBudget);
router.get("/", budgetController.getAllBudgets);
router.get("/:id", budgetController.getBudgetById);
router.put("/:id", budgetController.updateBudget);
router.delete("/:id", budgetController.deleteBudget);

module.exports = router;