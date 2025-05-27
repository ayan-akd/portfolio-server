import { model, Schema } from "mongoose";
import { TMessage } from "./message.interface";

const messageSchema = new Schema<TMessage>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    markAsRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const MessageModel = model<TMessage>("Message", messageSchema);

export default MessageModel;
