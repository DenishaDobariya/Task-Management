const express = require("express")
const app = express();

require("dotenv").config();
require("./connection/connection")

const PORT = process.env.PORT;

const core = require("cors")
const UserAPI = require("./routes/user");
const TaskAPI = require("./routes/task");

app.use(core());
app.use((express.json()));

app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);

app.use("/", (req, res) => {
    res.send("hello");
});

app.listen(PORT, ()=> {
    console.log(`Server Stared at ${PORT}`);
}) 