import express from "express";

const app = express();
const port = process.env.PORT || 9999;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello from API 👋");
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
