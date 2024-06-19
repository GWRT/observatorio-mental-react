import mongoose from "mongoose";

const dbConnectMentalNews = () => {
    try{
        const connection = mongoose.createConnection(process.env.MONGO_URI_MENTALNEWS);

        // connection.on('open', () => {
        //     const url = `${connection.host}:${connection.port}`;
        //     console.log(`MongoDB conectado en: ${url}`);

        // });

        // connection.on('connected', function () {
        //     mongoose.set('debug', () => {
        //         console.log(`MongoDB :: conected`);
        //     })
        //     //console.log(`MongoDB :: connected ${this.name}`);
        // })

        return connection;

    }catch(error) {
        console.log(`error dbConnect: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnectMentalNews;