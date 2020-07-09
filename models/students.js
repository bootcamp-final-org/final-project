const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  tutor: [ {type : Schema.Types.ObjectId, ref : 'Tutors'} ],
  selected_availability: [ {type : Schema.Types.ObjectId, ref : 'Calendar'} ]
});

const Students = mongoose.model("Students", studentsSchema);

module.exports = Students;
