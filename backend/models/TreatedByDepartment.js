import mongoose from "mongoose";

const treatedByDepartmentSchema = mongoose.Schema({
    departamento: String,
    cantidadCasos: Number,
});

const treatedByDepartment = (conn) => {
    return conn.model("classification_by_department-atendidos", treatedByDepartmentSchema, "classification_by_department-atendidos");
};

//const treatedByDepartment = connection.model("classification_by_department-atendidos", treatedByDepartmentSchema);
export default treatedByDepartment