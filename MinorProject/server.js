import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

let complaints = [];
let idCounter = 1;

app.get("/complaints", (req, res) => {
  res.json(complaints);
});

app.post("/complaints", (req, res) => {
  const { name, regNo, type, description } = req.body;

  const newComplaint = {
    id: idCounter++,
    name,
    regNo,
    type,
    description,
    status: "pending"
  };

  complaints.push(newComplaint);
  res.status(201).json(newComplaint);
});

app.put("/complaints/:id", (req, res) => {
  const complaint = complaints.find(c => c.id == req.params.id);
  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  complaint.status = req.body.status;
  res.json(complaint);
});

app.delete("/complaints/:id", (req, res) => {
  complaints = complaints.filter(c => c.id != req.params.id);
  res.json({ message: "Complaint deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
