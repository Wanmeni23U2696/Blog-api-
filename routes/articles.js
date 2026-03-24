const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articles');

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Récupérer tous les articles
 *     responses:
 *       200:
 *         description: Liste des articles
 */
router.get('/articles', articleController.getAllArticles);

/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Créer un article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               contenu:
 *                 type: string
 *               auteur:
 *                 type: string
 *               date_publication:
 *                 type: string
 *               categorie:
 *                 type: string
 *               tags:
 *                 type: string
 *     responses:
 *       201:
 *         description: Article créé
 */
router.post('/articles', articleController.createArticle);

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Récupérer un article par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'article
 *     responses:
 *       200:
 *         description: Article récupéré
 *       404:
 *         description: Article non trouvé
 */
router.get('/articles/:id', articleController.getArticleById);

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Mettre à jour un article
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               contenu:
 *                 type: string
 *               categorie:
 *                 type: string
 *               tags:
 *                 type: string
 *     responses:
 *       200:
 *         description: Article mis à jour
 *       404:
 *         description: Article non trouvé
 */
router.put('/articles/:id', articleController.updateArticle);

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Supprimer un article
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'article à supprimer
 *     responses:
 *       200:
 *         description: Article supprimé
 *       404:
 *         description: Article non trouvé
 */
router.delete('/articles/:id', articleController.deleteArticle);

/**
 * @swagger
 * /api/articles/search:
 *   get:
 *     summary: Rechercher des articles par texte
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Texte à rechercher dans le titre ou le contenu
 *     responses:
 *       200:
 *         description: Liste des articles correspondants
 */
router.get('/articles/search', articleController.searchArticles);

module.exports = router;
