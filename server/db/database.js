import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    const databaseInstance = await mongoose.connect(
      "mongodb+srv://abdulmoiz:YOUR_DATABSE_ATLAS_PASSWORD@cluster0.g5spt.mongodb.net/CRUD_APP"
    );
    console.log(
      `Mongo DB Connected successfully at PORT ${databaseInstance.connection.port} HOST:${databaseInstance.connection.host}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
