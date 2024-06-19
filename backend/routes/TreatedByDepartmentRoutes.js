import express from "express"
import { treatiesDepartment } from "../controllers/TreatiesByDepartmentController.js"
import treatedByDepartment from "../models/TreatedByDepartment.js"

const byDepartmentRouter = (conn) => {
    const route = express.Router();
    const treatedByDepartmentModel = treatedByDepartment(conn);
    route.get('/', treatiesDepartment(treatedByDepartmentModel));
    return route
}

export default byDepartmentRouter