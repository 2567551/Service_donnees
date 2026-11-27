import Client from '../models/client.model.js';

// Toutes les opérations MongoDB concernant les clients.
export const creerClient = (donnees) => Client.create(donnees);
export const listerClients = () => Client.find();

export const trouverClient = (id, inclureLocations = false) => {
  const recherche = Client.findById(id);

  if(inclureLocations) {
    recherche.populate(location);
  }

  return recherche;
};

// A REVOIR !!!!!!!!!!!!!
export const modifierClient = (id, nom, prenom, courriel, telephone) => 
    Client.findByIdAndUpdate(id, nom, prenom, courriel, telephone);

export const supprimerClient = (id) => Client.findByIdAndDelete(id);