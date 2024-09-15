import mongoose from 'mongoose';

const connection = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error occurred from the database server: " + error);
  }
};

export default connection;