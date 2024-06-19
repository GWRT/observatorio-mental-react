//import treatedForDiagnosis from "../models/TreatedForDiagnosis.js"

const treatiesDiagnosisControl = (TreatedForDiagnosis) => async (req, res) => {

    try{
        const treaties = await TreatedForDiagnosis.find();
        res.json(treaties);
    } catch (err) {
        console.error("Error al obtener por diagnostico:", err.message);
        res.status(500).json({ message: err });
    }

}

export {
    treatiesDiagnosisControl
}