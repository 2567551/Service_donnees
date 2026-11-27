import mongoose from 'mongoose';

// Le schema d'un client
const schema = new mongoose.Schema({
  nom: { type: String, required: true, trim: true },
  prenom: { type: String, required: true, trim: true },
  courriel: { type: String, required: true, trim: true },
  telephone: { type: String, required: true, trim: true },
  ville: { type: String, required: true, trim: true }
}, { timestamps: true, toJSON: { virtuals: true } });

schema.virtual('location', {
  ref:'Location',
  localField: '_id_client',    // L'identifiant du client
  foreignField: 'client'   // La reférence au champ client dans location
});

export default mongoose.model('Client', schema);