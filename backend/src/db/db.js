import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(`${process.env.DTABASE_URL}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
export { connectToDB };
