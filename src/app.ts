import express from "express";
import mongoose from "mongoose";
import Game from "./routes/Game";
import dbData from "./db/dbData";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); // Aggiungi il middleware cors


app.use('/v1/Games', Game);
const dbName = "ConsoleGamesAPI"; // Cambia il nome del database qui

app.listen(process.env.PORT || 3001, async () => {
  console.log("Server is running port 3001");
  await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
  await dbData(); // Chiamata per inizializzare i dati nel database
});

export default app;
