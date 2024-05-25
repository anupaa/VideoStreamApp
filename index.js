import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";

connectDB()
  .then(() =>
    app.listen(`${process.env.PORT}`, () => {
      console.log("Server Started Listning...");
    }),
  )
  .catch((e) => console.log("MongoDb Error...", e));
