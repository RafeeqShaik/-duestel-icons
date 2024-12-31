import mongoose from "mongoose";

export default async function mongoDBConnection() {
  const res = await mongoose.connect(process.env.MongoDB_URL!, {
    dbName: process.env.DB_NAME!,
  });
  console.log(`connected to database`);
  return res;
}
