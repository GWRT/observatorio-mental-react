import mongoose from "mongoose";

const treatedForDiagnosisSchema = mongoose.Schema({
    totalMale: Number,
    totalFemale: Number,
    totalGeneral: Number,
    Diagnosis: String
});

const treatedForDiagnosis = (conn) => {
    return conn.model("classification_by_diagnosis-atendidos", treatedForDiagnosisSchema, "classification_by_diagnosis-atendidos")
}

//const treatedForDiagnosis = mongoose.model("classification_by_diagnosis-atendidos", treatedForDiagnosisSchema)
export default treatedForDiagnosis