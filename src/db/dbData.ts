import mongoose from 'mongoose';
import Game from '../models/ModelGame';
import {Games} from './data';

const dbName = "ConsoleGamesAPI"; // Cambia il nome del database qui


const dbData = async () => {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);


  await Game.deleteMany(); // Rimuove tutti i documenti esistenti

  // Inserisci i dati nel database
  await Game.insertMany(Games);

  console.log('Dati iniziali inseriti nel database');
};

export default dbData;
