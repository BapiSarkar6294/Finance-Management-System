let express = require('express');
let dotenv = require('dotenv');
const connectdb = require('./config/db');
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const accountRoutes = require("./routes/accountRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const budgetRoutes = require("./routes/budgetRoutes");

dotenv.config();
const app = express();
//middleware
app.use(express.json());
//connect db
connectdb();

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/budgets", budgetRoutes);

app.get('/', (req, res) => {
    res.send('api is running');
});
const PORT = process.env.PORT || 8020;
app.listen(PORT, () => console.log('server is running port 8020'));
