import mongoose from "mongoose";
import mongooseAggregate from "mongoose-aggregate-paginate-v2";
const { Schema } = mongoose;
const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String,
      required: true,
      default: "",
    },
    thumbnail: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      required: true,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },

  { timeStamps: true },
);
videoSchema.plugin(mongooseAggregate);
export const Videos = mongoose.model("Videos", videoSchema);
