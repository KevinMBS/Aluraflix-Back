import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        descricao: {type: String, required: true},
        url: {type: String, required: true}
    }
)

const Videos = mongoose.model('Videos', videoSchema)

export default Videos