import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import config from "../config";
import catchAsync from "../utils/catchAsync";
import { AppError } from "../errors/AppError";
import { verifyToken } from "../modules/auth/auth.utils";

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    const authorizedEmail = [
      "ayanakd112@gmail.com",
      "ayanakd212@gmail.com",
      "ayanakd312@gmail.com",
      "ayankumar.akd@gmail.com",
      "admin@mail.com",
    ];

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    // checking if the given token is valid
    const decoded = verifyToken(token, config.jwt_access_secret as string);
    const { email } = decoded;

    if (!authorizedEmail.includes(email)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
    }
    next();
  });
};

export default auth;
