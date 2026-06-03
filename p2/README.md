# Praktikum Full Stack P2

CRUD dengan Express.js, EJS, dan MySQL.

## Struktur Project

```text
p2
├── views
│   ├── add.ejs
│   ├── edit.ejs
│   └── index.ejs
├── app.js
├── db.js
├── package.json
└── schema.sql
```

## Persiapan Database

Jalankan isi file `schema.sql` di MySQL/phpMyAdmin:

```sql
CREATE DATABASE IF NOT EXISTS crud_db;

USE crud_db;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100)
);
```

## Install dan Jalankan

```bash
npm install
npm start
```

Buka aplikasi di:

```text
http://localhost:3000
```
