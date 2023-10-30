const Project = require("../dataModels/Project.model");
const path = require("path");
const bcrypt = require("bcrypt");
const passport = require("passport");

const postProjects = async (req, res, next) => {

  const {  name, desc } = req.body;
  const id = req.params.id;

const errors=[]
if (!name || !desc ) {
  errors.push("All fields are required!");
}

if (errors.length > 0) {
  res.status(400).json({ error: errors });
} else {
  const newProject = new Project({
                name,
                id,
                desc,
              });
              newProject
                .save()
                .then(() => {
                  res.redirect("/login");
                })
                .catch(() => {
                  errors.push("Please try again");
                  res.status(400).json({ error: errors });
                });
}
};

const getProjectsbyID = async (req, res, next) => {

  const id = req.params.id;

   try {
    const projects = await Project.find({id: id});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};


const updateProject = async (req, res) => {

  const id = req.params.id;

   try {
    const { name, desc } = req.body;

    const project = await Project.findById(id);
    console.log(project)


    // Update the designation if provided
    if (name) {
      project.name = name;
    }


    if (desc) {
      project.desc = desc;
    }

    await project.save();

    res.json({ message: 'Project information updated successfully' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
  
};

const deleteProject = async (req, res) => {
  try {
    const projectinfo = await Project.findByIdAndRemove(req.params.id);

    console.log(projectinfo);

    if (!projectinfo) {
      return res.status(404).json({ error: "Project information not found" });
    }

    res.json({ message: "Project information deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  postProjects,
  getProjectsbyID,
  updateProject,
  deleteProject,
};