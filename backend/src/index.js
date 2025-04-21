import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { app } from "./app.js";
import { connectToDB } from "./db/db.js";

connectToDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server started on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("server connection error: " + err);
  });
