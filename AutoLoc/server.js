import app from '../app.js';

// Point d'entrée : le serveur attend les requêtes HTTP.
const PORT = 3000;
app.listen(PORT, () => console.log(`API : http://localhost:${PORT}`));