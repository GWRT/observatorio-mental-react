import mongoose from "mongoose";

const dbConnnect = () => {
    try{
        const connection = mongoose.createConnection(process.env.MONGO_URI);

        // const url = `${connection.connection.host}:${connection.connection.port}`;
        // console.log(`MongoDB conectado en: ${url}`)

        return connection

    }catch(error) {
        console.log(`error dbConnect: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnnect;