const express = require("express");
const cors = require("cors");
require("dotenv").config()
require("./models/db");
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
const gymsRouter = require("./routes/Gym");
const roleRouter = require("./routes/Roles");
app.use("/gyms", gymsRouter)
app.use("/roles", roleRouter)
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
