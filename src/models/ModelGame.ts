

import mongoose, { Schema, Document } from "mongoose";

interface IGame extends Document {
  title: string;
  consoleName: string;
  genre: string;
  price: number;
  image: string;
  description: string;
}

const GameSchema: Schema<IGame> = new Schema({
  title: { type: String, required: true },
  consoleName: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const GameModel = mongoose.model<IGame>("Game", GameSchema);

export default GameModel;
