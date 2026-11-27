import { Router } from 'express';
import { creerClient, listerClients, trouverClient, supprimerClient, modifierClient } from '../repositories/client.repository.js';

const router = Router();

// Fonction qui retourne tout les clients
router.get('/', async (req, res, next) => {
    // Essaye de récupérer la liste sinon envoie une erreur
    try { res.json(await listerClients()); }
    catch (e) { next(e); }
});