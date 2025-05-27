import { Request, Response } from "express";
import { MessageService } from "./message.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// get all message
const getAllMessage = catchAsync(async (req: Request, res: Response) => {
  const data = await MessageService.getAllMessageFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Messages retrieved successfully",
    data,
  });
});

// create message
const createMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageService.createMessageToDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Message sent successfully",
    data: result,
  });
});

// mark as read message
const markAsReadMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageService.markAsReadMessageFromDB(
    req.params.id as string
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Message marked as read successfully",
    data: result,
  });
});

// delete message
const deleteMessage = catchAsync(async (req: Request, res: Response) => {
  await MessageService.deleteMessageFromDB(req.params.id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Message deleted successfully",
    data: null,
  });
});

export const MessageController = {
  getAllMessage,
  createMessage,
  markAsReadMessage,
  deleteMessage,
};
