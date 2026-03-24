const db = require('./db');

// Créer un article
const createArticle = (article, callback) => {
  const { titre, contenu, auteur, date_publication, categorie, tags } = article;

  const sql = `
    INSERT INTO articles (titre, contenu, auteur, date_publication, categorie, tags)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [titre, contenu, auteur, date_publication, categorie, tags], function(err) {
    callback(err, this.lastID);
  });
};

// Récupérer tous les articles
const getAllArticles = (callback) => {
  db.all('SELECT * FROM articles', [], callback);
};

// Récupérer un article par ID
const getArticleById = (id, callback) => {
  db.get('SELECT * FROM articles WHERE id = ?', [id], callback);
};

// Mettre à jour
const updateArticle = (id, article, callback) => {
  const { titre, contenu, categorie, tags } = article;

  const sql = `
    UPDATE articles
    SET titre = ?, contenu = ?, categorie = ?, tags = ?
    WHERE id = ?
  `;

  db.run(sql, [titre, contenu, categorie, tags, id], function(err) {
    callback(err, this.changes);
  });
};

// Supprimer
const deleteArticle = (id, callback) => {
  db.run('DELETE FROM articles WHERE id = ?', [id], function(err) {
    callback(err, this.changes);
  });
};

// Rechercher
const searchArticles = (query, callback) => {
  const like = `%${query}%`;
  db.all(
    'SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?',
    [like, like],
    callback
  );
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  searchArticles
};
