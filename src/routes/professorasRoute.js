const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasControllers")
router.get("/:id",controller.getById)
router.get("/",controller.get)
module.exports = router
