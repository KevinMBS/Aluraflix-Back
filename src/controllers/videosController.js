import videoModel from '../models/Video.js'

class videosController{
    static listarVideos = (req, res) =>{
        videoModel.find((err, videos)=>{
            res.status(200).json(videos)
        })  
    }

    static novoVideo = (req, res) =>{
        let video = new videoModel(req.body)
        video.save((err)=>{

            if(err){
                res.status(500).send({message: `${err.message} - Erro ao cadastrar novo  video`})
            }else{
                res.status(201).send(video.toJSON())
            }
        })
    }
}

export default videosController