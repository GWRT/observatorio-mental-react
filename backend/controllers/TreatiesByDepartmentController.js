//import treatedByDepartment from "../models/TreatedByDepartment.js"

const treatiesDepartment = (treatedDiagnosis) => async (req, res) => {

    try{
        const diagnoses = await treatedDiagnosis.find();
        res.json(diagnoses);
    } catch(errr) {
        console.error("Error al obtener los casos: ", err.message);
        res.status(500).json({ message: err });
    }
    
}

export {
    treatiesDepartment
}