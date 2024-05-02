import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://sainiamit:MERNpassword123@recipes.o1wsjje.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes"
);

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);


// app.use(express.static(path.resolve(__dirname, "client", "dist")));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
// });

app.listen(3001, () => console.log("Server fired up!"));
