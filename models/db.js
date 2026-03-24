const sqlite3 = require('sqlite3').verbose();
const dotenv = require('dotenv');

dotenv.config();

const db = new sqlite3.Database(process.env.DB_FILE, (err) => {
  if (err) {
    console.error('Erreur de connexion à SQLite :', err.message);
  } else {
    console.log('Connecté à SQLite !');
  }
});

// Créer la table articles si elle n’existe pas
db.run(`CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titre TEXT NOT NULL,
  contenu TEXT NOT NULL,
  auteur TEXT NOT NULL,
  date_publication TEXT NOT NULL,
  categorie TEXT,
  tags TEXT
)`);

module.exports = db;
