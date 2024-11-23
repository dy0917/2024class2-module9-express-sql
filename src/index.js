const express = require("express");
require("dotenv").config();
const dbConect = require("./dbConnect");
const app = express();

// parse requests of content-type - application / json;
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to mySql application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
