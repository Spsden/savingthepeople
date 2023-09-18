const express = require('express');
const {getPractise,putPractise} = require("./methods");

const router = express.Router()

router.route("/").get(getPractise).post(putPractise)


module.exports = router;