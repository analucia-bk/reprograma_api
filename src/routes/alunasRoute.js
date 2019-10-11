const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasControllers")

router.get("/",controller.get)
router.get("/nasceuSp",controller.getSp)
router.get("/:id",controller.getById)
router.get("/:id/getAge", controller.getAge )
router.get("/:id/books", controller.getBooks)

module.exports = router

