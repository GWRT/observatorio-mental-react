import express from "express"
import {treatiesDiagnosisControl} from "../controllers/TreatiesAtenidosController.js"
import treatedForDiagnosis from "../models/TreatedForDiagnosis.js"

const treatiesForDiagnosisRoute = (conn) => {
    const router = express.Router()
    const treatiesModel = treatedForDiagnosis(conn)
    router.get('/', treatiesDiagnosisControl(treatiesModel))
    return router
};

export default treatiesForDiagnosisRoute