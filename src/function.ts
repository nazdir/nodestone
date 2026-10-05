import { Request, Response } from "express";
import { app } from "./server";

export const nodestone = (req: Request, res: Response): void => {
  app(req, res);
};
