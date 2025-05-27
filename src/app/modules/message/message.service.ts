import { AppError } from "../../errors/AppError";
import { sendPortfolioMessage } from "../../utils/sendMail";
import { TMessage } from "./message.interface";
import MessageModel from "./message.model";
import httpStatus from "http-status";

// get all message
const getAllMessageFromDB = async () => {
  const result = await MessageModel.find({}, null, { sort: { createdAt: -1 } });
  return result;
};

// create message
const createMessageToDB = async (payload: Partial<TMessage>) => {
  const result = await MessageModel.create(payload);

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to create message");
  }

  await sendPortfolioMessage(result.name, result.email, result.message);

  return result;
};

// mark as read message
const markAsReadMessageFromDB = async (id: string) => {
  const result = await MessageModel.findByIdAndUpdate(id, {
    isRead: true,
  });
  return result;
};

// delete message
const deleteMessageFromDB = async (id: string) => {
  const result = await MessageModel.findByIdAndDelete(id);
  return result;
};

export const MessageService = {
  getAllMessageFromDB,
  createMessageToDB,
  markAsReadMessageFromDB,
  deleteMessageFromDB,
};
