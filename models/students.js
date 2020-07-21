const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  tutor: [ {type : Schema.Types.ObjectId, ref : 'Tutors'} ],
  selected_availability: [ {type : Object, ref : 'Tutors'} ],
  availability: [{ type: String, required: true }]
});

const Students = mongoose.model("Students", studentsSchema);

module.exports = Students;
