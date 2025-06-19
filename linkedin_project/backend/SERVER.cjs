const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "shishir12345", // use your own MySQL password
  database: "linkedin_education_consultancy",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err);
    return;
  }
  console.log("✅ Connected to MySQL database.");
});

app.post("/api/contact", (req, res) => {
  const { name, email, contact, address, course, country } = req.body;

  console.log("📥 Received form data:", req.body);

  const sql = `
    INSERT INTO contact_form (name, email, contact, address, course, country)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, email, contact, address, course, country], (err, result) => {
    if (err) {
      console.error("❌ Error inserting data:", err.message);
      return res.status(500).json({ error: "Failed to submit form" });
    }

    console.log("✅ Data inserted:", result);
    res.status(200).json({ message: "Form submitted successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
