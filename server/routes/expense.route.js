import express from "express";
import {
  addExpense,
  getAllExpenses,
  markAsDoneOrUndone,
  removeExpense,
  updateExpense
} from "../controllers/expenceControllers.js";
import  isAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", isAuthenticated, addExpense);
router.get("/get", isAuthenticated, getAllExpenses);
router.put("/mark/:id", isAuthenticated, markAsDoneOrUndone);
router.delete("/delete/:id", isAuthenticated, removeExpense);
router.put("/update/:id", isAuthenticated, updateExpense);

export default router;
