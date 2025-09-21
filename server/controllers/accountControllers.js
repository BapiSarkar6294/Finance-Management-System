const Account = require('../model/Account');

exports.createAccount = async (req, res) => {
    try {
        const newAccount = await Account.create(req.body);
        res.status(201).json(newAccount);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAccount = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json(accounts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateAccount = async (req, res) => {
    try {
        const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(account);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteAccount = async (req, res) => {
    try {
        await Account.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Account deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};