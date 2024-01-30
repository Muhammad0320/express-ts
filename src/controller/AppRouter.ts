import express from "express";

export class AppRouter {
  public static instance: express.Router;

  static getInstance(): express.Router {
    if (!this.instance) {
      this.instance = express.Router();
    }

    return this.instance;
  }
}
