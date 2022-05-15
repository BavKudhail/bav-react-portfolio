import mongoose from "mongoose";
import { MONGO_URL } from "../url/mongoDBurl.js";

mongoose.connect(MONGO_URL, {
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log(`Error, ${err}`);
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose connected");
});
