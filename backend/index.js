import express from "express";
import dotenv from "dotenv"
import cors from 'cors'

import dbConnect from "./config/db.js";
import dbConnectMentalNews from "./config/dbMentalNews.js"

import treatedForDiagnosisRoutes from './routes/TreatedForDiagnosisRoutes.js'
import treatedByDepartmentRoutes from './routes/TreatedByDepartmentRoutes.js'
import mentalNewsRouter from './routes/MentalNewsRoutes.js'
console.log(mentalNewsRouter)

const app = express();

dotenv.config({ path: '/etc/secrets/.env' });

const dbMinsaConnection = dbConnect();
const mentalNewsConnection = dbConnectMentalNews();

//configurar CORS 

const whiteList = [process.env.FRONTEND_URL] //FRONTEND_URL = http://localhost:5173

const corsOption = {
    origin: (origin, callback) => {
        console.log('Origin:', origin);
        if(!origin || whiteList.includes(origin)){
            //puede consultar API
            callback(null, true);
        }else{
            //no esta permitido
            callback(new Error('error de CORS: NO PERMITIDO'));
        }
    }
};

app.use(cors(corsOption))

app.use(express.json());

//Routing
app.use('/api/getTreatedForDiagnosis', treatedForDiagnosisRoutes(dbMinsaConnection))
app.use('/api/getTreatedByDepartment', treatedByDepartmentRoutes(dbMinsaConnection))
app.use('/api/getMentalNews', mentalNewsRouter(mentalNewsConnection))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})