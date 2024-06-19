import mongoose from "mongoose";

const mentalNewsSchema = mongoose.Schema({
    source: {
        id: String,
        name: String
    },
    author : String,
    title : String,
    description : String,
    url : String,
    urlToImage : String,
    publishedAt : String,
    content : String,
});

const mentalNews = (conn) => {
    return conn.model("MentalNewsCollection", mentalNewsSchema, "MentalNewsCollection");
};

//const mentalNews = connection.model("MentalNewsCollection", mentalNewsSchema);
export default mentalNews