import videoModel from '../models/Video.js'

class videosController{
    static listarVideos = (req, res) =>{
        videoModel.find((err, Videos)=>{
            res.status(200).json(Videos)
        })
        
    }   
}

export default videosController