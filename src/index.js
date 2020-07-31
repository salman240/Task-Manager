const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(
    "<center style='display: flex; flex: 1; height: 95vh; align-items: center; justify-content: center;'><h1>Task Manager Rest Api's</h1></center>"
  );
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
