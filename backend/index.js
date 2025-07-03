import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Crear paciente
app.post('/api/pacientes', async (req, res) => {
  const { nombre, apellido, peso, talla, diagnostico } = req.body;
  await pool.query(
    'INSERT INTO pacientes (nombre, apellido, peso, talla, diagnostico) VALUES ($1, $2, $3, $4, $5)',
    [nombre, apellido, peso, talla, diagnostico]
  );
  res.status(201).json({ mensaje: 'Paciente registrado' });
});

// Obtener todos los pacientes
app.get('/api/pacientes', async (req, res) => {
  const result = await pool.query('SELECT * FROM pacientes ORDER BY id');
  res.json(result.rows);
});

// Eliminar paciente
app.delete('/api/pacientes/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM pacientes WHERE id = $1', [id]);
  res.json({ mensaje: 'Paciente eliminado' });
});

// Editar paciente
app.put('/api/pacientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, peso, talla, diagnostico } = req.body;
  await pool.query(
    'UPDATE pacientes SET nombre=$1, apellido=$2, peso=$3, talla=$4, diagnostico=$5 WHERE id=$6',
    [nombre, apellido, peso, talla, diagnostico, id]
  );
  res.json({ mensaje: 'Paciente actualizado' });
});

app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
