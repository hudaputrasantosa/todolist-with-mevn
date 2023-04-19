const express = require("express");
const tasks = require("./router/task");
const connectDB = require("./db/connect");
const app = express();
const port = 3000;
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`server on listening in http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
