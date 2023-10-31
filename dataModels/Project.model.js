const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  project_image: {
    type: String,
    default:'',
  },
  images: {
    type: [String],
    default:[],
  },
  audios: {
    type: [String],
    default: [],
  }
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;