const db = require('./models/db');

db.all('SELECT 1 + 1 AS solution', [], (err, rows) => {
  if (err) throw err;
  console.log('Test DB:', rows[0].solution);
});
