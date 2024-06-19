import express from "express"
import { mentalNewsControl } from "../controllers/MentalNewsController.js"
import mentalNews from "../models/MentalNewsModel.js";

const mentalNewsRouter = (connection) => {
    const route = express.Router()
    const mentalNewsModel = mentalNews(connection);
    route.get('/', mentalNewsControl(mentalNewsModel))
    return route
};

export default mentalNewsRouter