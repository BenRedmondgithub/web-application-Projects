const expreess = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = expreess();
app.use(cors());
app.use(expreess.json());

mongoose.connect(process.env.MONGO_URI,);

app.use("/api/task", require("./routes/task"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});