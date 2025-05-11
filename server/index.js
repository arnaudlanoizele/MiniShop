const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour parser le JSON
app.use(express.json());

// Exemple de route test
app.get('/', (req, res) => {
  res.send('Bienvenue sur MiniShop API !');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
