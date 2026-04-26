import express from "express";

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/split", (req, res) => {
  const { total = 0, people = 1 } = req.body;
  const perPerson = people ? total / people : 0;

  res.json({
    total,
    people,
    perPerson,
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Splitty backend running on http://localhost:${port}`);
});
