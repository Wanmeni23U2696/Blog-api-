const Article = require('../models/article');

// Créer un article
const createArticle = (req, res) => {
  const article = req.body;

  if (!article.titre || !article.contenu || !article.auteur) {
    return res.status(400).json({ message: "Champs obligatoires manquants" });
  }

  Article.createArticle(article, (err, id) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Article créé", id });
  });
};

// Récupérer tous les articles
const getAllArticles = (req, res) => {
  Article.getAllArticles((err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};

// Récupérer un article par ID
const getArticleById = (req, res) => {
  const id = req.params.id;

  Article.getArticleById(id, (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    res.status(200).json(row);
  });
};

// Mettre à jour un article
const updateArticle = (req, res) => {
  const id = req.params.id;
  const article = req.body;

  Article.updateArticle(id, article, (err, changes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (changes === 0) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    res.status(200).json({ message: "Article mis à jour" });
  });
};

// Supprimer un article
const deleteArticle = (req, res) => {
  const id = req.params.id;

  Article.deleteArticle(id, (err, changes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (changes === 0) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    res.status(200).json({ message: "Article supprimé" });
  });
};

// Rechercher un article
const searchArticles = (req, res) => {
  const query = req.query.query;

  Article.searchArticles(query, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  searchArticles
};
