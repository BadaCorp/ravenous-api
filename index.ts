require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const yelp = require("./routes/yelp.ts");

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://ravenous-yelp-like-clone.netlify.app/",
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/yelp", yelp);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
