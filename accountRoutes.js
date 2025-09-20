const express = require("express");
const router = express.Router();
const accountControllers = require("../controllers/accountControllers");

// CRUD Accounts
router.post("/", accountControllers.createAccount);
router.get("/:", accountControllers.getAccount);
router.put("/:id", accountControllers.updateAccount);
router.delete("/:id", accountControllers.deleteAccount);

module.exports = router;