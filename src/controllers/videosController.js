import videoModel from '../models/Video.js'

class videosController{
    
    static listVideos = (req, res) =>{
        videoModel.find((err, videos)=>{
            res.status(200).json(videos)
        })  
    }

    static newVideo = (req, res) =>{
        let video = new videoModel(req.body)
        video.save((err)=>{

            if(err){
                res.status(500).send({message: `${err.message} - Error on build a new video`})
            }else{
                res.status(201).send(video.toJSON())
            }
        })
    }

    static attVideo = (req, res)=>{
        const id = req.params.id

        videoModel.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Error cannot update Video`})
            }else{
                res.status(200).send({message: `Video successfully updated`}) 
            }
        })
    }

    static listVideoById = (req, res) =>{
        const id = req.params.id

        videoModel.findById(id, (err, video) =>{
            if(err){
                res.status(400).send({message: `${err.message} - Error cannot find Video`})
            }else{
                res.status(201).send(video.toJSON())
            }
        })
    }

    static deleteVideoById = (req, res) =>{
        const id = req.params.id

        videoModel.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Error cannot delete Video`})
            }else{
                res.status(200).send({message: `Video successfully deleted`})
            }
        })
    }
}

export default videosController