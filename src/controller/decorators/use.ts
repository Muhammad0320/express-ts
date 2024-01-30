import { RequestHandler } from "express";

export const use = (middle: RequestHandler) => {
  return function () {};
};
