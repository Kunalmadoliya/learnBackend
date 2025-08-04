const express = require("express");
const multer = require("multer")
const router = express.Router();



const upload = multer({storage : multer.memoryStorage()})




router.post("/songs",  (req, res) => {});

module.exports = router;
