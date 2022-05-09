import express from "express";
import videosController from "../controllers/videosController.js"

const router = express.Router()

router
    .get('/videos', videosController.listVideos)
    .get('/videos/:id', videosController.listVideoById)
    .put('/videos/:id', videosController.attVideo)
    .post('/videos', videosController.newVideo)
    .delete('/videos/:id', videosController.deleteVideoById)

export default router
