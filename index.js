const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug (optionnel mais utile)
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Routes
const articleRoutes = require('./routes/articles');
app.use('/api', articleRoutes);

// Route test
app.get('/', (req, res) => {
  res.send('API Blog fonctionne 🚀');
});

// Lancer serveur
const PORT = process.env.PORT || 3000;
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Blog',
      version: '1.0.0',
      description: 'Documentation de mon API Blog'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./routes/*.js'] // lire les routes
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
