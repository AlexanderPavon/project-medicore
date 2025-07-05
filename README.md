
# MediCore 🩺

MediCore es una aplicación web completa para gestionar pacientes. Permite registrar, buscar, editar y eliminar información médica como nombre, apellido, peso, talla y diagnóstico.

## 🛠️ Tecnologías utilizadas

- **Frontend:** HTML + JavaScript (Vanilla)
- **Backend:** Node.js + Express
- **Base de Datos:** PostgreSQL
- **Administrador BD:** pgAdmin 4
- **Contenedores:** Docker + Docker Compose

## 📁 Estructura del proyecto

```
PROJECT-MEDICORE/
├── backend/
│   ├── index.js
│   ├── db.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── init.sql
├── docker-compose.yml
└── MediCore test.postman_collection.json
```

## 🚀 ¿Cómo ejecutar el proyecto?

### 1. Requisitos previos

- Tener instalado [Docker](https://www.docker.com/products/docker-desktop)
- Tener instalado [Docker Compose](https://docs.docker.com/compose/)

### 2. Clonar el repositorio

```bash
git clone https://github.com/AlexanderPavon/project-medicore
cd medicore
```

### 3. Ejecutar los contenedores

```bash
docker-compose up --build
```

Esto iniciará:
- El frontend en `http://localhost:8080`
- El backend en `http://localhost:5000`
- PostgreSQL en el puerto `5432`
- pgAdmin en `http://localhost:5050`

## 🧪 Acceso a pgAdmin

- **URL:** http://localhost:5050  
- **Email:** `medicore@gmail.com`  
- **Contraseña:** `medicore123`

### Conexión al servidor en pgAdmin:

- **Nombre del servidor:** PostgreSQL Local
- **Host:** `db`
- **Puerto:** `5432`
- **Usuario:** `admin`
- **Contraseña:** `admin123`
- **Base de datos:** `pacientesdb`

> Al iniciar, el archivo `init.sql` creará automáticamente la tabla `pacientes`.

## 📦 Endpoints del Backend

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/pacientes` | Listar todos los pacientes |
| POST | `/api/pacientes` | Registrar nuevo paciente |
| PUT | `/api/pacientes/:id` | Actualizar paciente |
| DELETE | `/api/pacientes/:id` | Eliminar paciente |

## 🖼️ Funcionalidades del Frontend

- Formulario para registrar pacientes
- Tabla con todos los pacientes
- Buscador interactivo
- Botones de editar y eliminar
- Estilo moderno con íconos (Lucide)

## 💾 SQL inicial

```sql
CREATE TABLE IF NOT EXISTS pacientes (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  apellido TEXT NOT NULL,
  peso NUMERIC NOT NULL,
  talla NUMERIC NOT NULL,
  diagnostico TEXT NOT NULL
);
```

## 🧪 Pruebas

Puedes usar el archivo de Postman incluido para probar el API:  
**`MediCore test.postman_collection.json`**

## ✨ Autor

Desarrollado por **Alison Carrion y Alexander Pavón** 👩‍💻
