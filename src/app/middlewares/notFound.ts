/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";

const notFound: RequestHandler = (req, res, next): void => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API Not Found !!",
    error: "",
  });
};

export default notFound;
