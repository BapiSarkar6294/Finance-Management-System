const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();


// CRUD Categories
router.post("/", categoryController.addcategory);
router.get("/", categoryController.getcategory);
router.put("/:id", categoryController.updatecategory);
router.delete("/:id", categoryController.deletecategory);

module.exports = router;