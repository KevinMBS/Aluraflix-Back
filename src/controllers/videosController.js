class videosController{
    static listarVideos = (req, res) =>{
        console.log("Chamar função para bucar no DB usando model Video")
        res.status(200).send({titulo: "Videos"})
    }   
}

export default videosController