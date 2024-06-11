import express = require("express");
import yelpAPI from "../controllers";

const router = express.Router();

router.get("/", yelpAPI.getBusinesses);

module.exports = router;
