require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

app.get('/competences', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM competences');
  res.json(rows);
});

app.get('/indicators/:competenceId', async (req, res) => {
  const { competenceId } = req.params;
  const { rows } = await pool.query('SELECT * FROM indicators WHERE competence_id = $1', [competenceId]);
  res.json(rows);
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
