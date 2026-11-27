// middleware de gestion centralisée des erreurs dans Express.
export function errors(err, req, res, next) {
  // Afficher le message d'erreur dans la console du serveur.
  console.error('Erreur :', err.message); 
    // Vérifier si l'erreur est de type CastError.
    //CatsError:signale qu'une valeur ne peut pas être convertie au type attendu par Mongoose.
  // Par exemple, un identifiant MongoDB mal formé.
  if (err.name === 'CastError') {
    return res.status(400).json({ code: 400, erreur: 'Identifiant invalide' });
  }
  // TODO 7 : traiter ValidationError avec le code 422.
  // Le false est temporaire et doit être remplacé.
  if (err.name === 'ValidationError' ) {
    return res.status(422).json({ code: 422, erreur: err.message });
  }
  // Vérifier si MongoDB retourne le code 11000.
  // Ce code indique une violation d'un index unique.
  // Exemple : une adresse courriel déjà enregistrée.
  if (err.code === 11000) {
    return res.status(409).json({ code: 409, erreur: 'Valeur déjà utilisée' });
  }
    // Si l'erreur ne correspond à aucun cas précédent,
  // retourner une erreur générale HTTP 500.
  return res.status(500).json({ code: 500, erreur: 'Erreur interne' });
}