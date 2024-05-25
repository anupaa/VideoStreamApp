import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("DB connecting successful...");
  } catch (e) {
    console.error("Connecting to DB failed!!", e);
    process.exit();
  }
};
export default connectDB;
