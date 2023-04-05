const express = require("express");
const PORT = 3000;
const api_routes = require("./routes/api_routes");
const view_routes = require("./routes/view_routes");

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api_routes);
app.use("/", view_routes);

app.listen(PORT, () => console.log("Listening on port %s", PORT));
