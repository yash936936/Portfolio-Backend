const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: {type: String,required: true},
  github:String
});
module.exports = mongoose.model('project', ProjectSchema);
