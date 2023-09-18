import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ApplicationError } from "@/protocols";

export function handleApplicationErrors(
  err: ApplicationError | Error,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  switch (err.name) {
    case "InvalidDataError":
      return res.status(httpStatus.BAD_REQUEST).send({
        message: err.message,
      });

    case "NotFoundError":
      return res.status(httpStatus.NOT_FOUND).send({
        message: err.message,
      });

    case "ConflictError":
      return res.status(httpStatus.CONFLICT).send({
        message: err.message,
      });
      
    default:
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error",
      });
  }
}
