import express from "express";
import videosController from "../controllers/videosController.js"

const router = express.Router()

router
    .get('/videos', videosController.listarVideos)

export default router
