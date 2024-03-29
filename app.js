const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    //connect to server only after successful DB connection
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server running on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
