require("dotenv").config();
import express from "express";
import cors from "cors";
import router from "./routes/yelp";

const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://ravenous-yelp-like-clone.netlify.app",
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/yelp", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
