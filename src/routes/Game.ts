

import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import GameModel from "../models/ModelGame";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const games = await GameModel.find();
    res.json(games);
  } catch (error: any) {
    console.error('Error retrieving games', error);
    res.status(500).json({ error: 'Error retrieving games' });
  }
});

router.get('/genre/:genre', async (req: Request, res: Response) => {
  try {
    const { genre } = req.params;
    const games = await GameModel.find({ genre });
    res.json(games);
  } catch (error: any) {
    console.error('Error retrieving games', error);
    res.status(500).json({ error: 'Error retrieving games' });
  }
});

interface Filter {
  title?: string;
  consoleName?: string;
  genre?: string;
  price?: number;
  image?: string;
  description?: string;
}

router.get('/q', async (req: Request, res: Response) => {
  const { title, consoleName, genre, price, image, description } = req.query as Record<string, string>;

  try {
    let filter: Filter = {};

    if (title) {
      filter.title = title;
    }

    if (consoleName) {
      filter.consoleName = consoleName;
    }

    if (genre) {
      filter.genre = genre;
    }

    if (price) {
      filter.price = JSON.parse(price);
    }

    if (image) {
      filter.image = image;
    }

    if (description) {
      filter.description = description;
    }

    const games = await GameModel.find(filter);

    if (games.length === 0) {
      return res.status(404).json({ message: "Games not found" });
    }

    res.json(games);
  } catch (error: any) {
    console.error('Error fetching games', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;

