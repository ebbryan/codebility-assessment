const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const todoRoutes = require("./src/modules/todo/todo.route.js");

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// This block is my API routes
app.use("/api", todoRoutes);

app.use((req, res) => {
  res.status(404).send({
    error: { message: "Endpoint not found!", status: res.statusCode },
  });
});

app.use((err, req, res, next) => {
  res.status(500).send({
    error: { message: "Internal Server Error", status: res.statusCode },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
