import express from "express";
import videosController from "../controllers/videosController.js"

const router = express.Router()

router
    .get('/videos', videosController.listVideos)
    .get('/videos/:id', videosController.listVideoById)
    .put('/videos/:id', videosController.attVideo)
    .post('/videos', videosController.newVideo)

export default router
