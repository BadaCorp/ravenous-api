const express = require("express");
const router = express.Router();
import yelpAPI from "../controllers";

router.get("/", yelpAPI.getBusinesses);

module.exports = router;
