const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema

const annonceSchema = new mongoose.Schema({
    

    employeur:String,
    poste:String,
    nomCompagnie:String,
    salaire:String,
    emplacement:String,
    description:String,
  
})

module.exports = mongoose.model("Annonce",annonceSchema);