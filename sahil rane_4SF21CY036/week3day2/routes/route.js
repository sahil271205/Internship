const express = require("express");
const routes = express.route();
const coursecontroller = require("../Controller/coursecontroller");

router.post("/register",coursecontroller.createCourse);

module.exports = routes;