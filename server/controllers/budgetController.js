const Budget = require('../model/Budget');

exports.createBudget = async (req, res) => {
    try {
        const newBudget = await Budget.create(req.body);
        res.status(201).json(newBudget);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.status(200).json(budgets);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getBudgetById = async (req, res) => {
    try {
        const budget = await Budget.findById(req.params.id);
        res.status(200).json(budget);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateBudget = async (req, res) => {
    try {
        const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(budget);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteBudget = async (req, res) => {
    try {
        await Budget.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Budget deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};