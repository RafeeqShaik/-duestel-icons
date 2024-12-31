import mongoose from "mongoose";

export default function mongoDBConnection() {
  return mongoose
    .connect(process.env.MongoDB_URL!, { dbName: process.env.DB_NAME! })
    .then((res) => {
      console.log(`connected to database`);
      return res;
    });
}
