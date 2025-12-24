import mongoose from "mongoose";

const dbConnection = async () => {
  const mongoUri = process.env.MONGO_DB_URI as string;
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("data Base Connnected....");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};

export default dbConnection;
