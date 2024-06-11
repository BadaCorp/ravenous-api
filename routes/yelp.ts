import express from "express";
import yelpAPI from "../controllers";

const router = express.Router();

router.get("/", yelpAPI.getBusinesses);

export default router;
