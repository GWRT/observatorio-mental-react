//import mentalNews from "../models/MentalNewsModel.js"

const mentalNewsControl = (MentalNews) => async (req, res) => {
    try {
        const news = await MentalNews.find();
        res.json(news);
    } catch (err) {
        console.error("Error al obtener noticias:", err.message);
        res.status(500).json({ message: err });
    }
}

export {
    mentalNewsControl
}