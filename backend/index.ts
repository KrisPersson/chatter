const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const { beansRouter } = require("./routes/beans.route");
const { userRouter } = require("./routes/user.route");

app.use("/api/beans", beansRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log("Started server at:" + PORT);
});
