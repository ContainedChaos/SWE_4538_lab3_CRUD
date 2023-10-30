const express = require("express");
const router = express.Router();
const {
    postProjects, getProjectsbyID, updateProject, deleteProject
    } = require("../controllers/project.controller");

router.post("/post-project/:id", postProjects);
router.get("/get-projects/:id", getProjectsbyID);
router.patch("/update-project/:id", updateProject);
router.delete("/delete-project/:id", deleteProject);

module.exports = router;