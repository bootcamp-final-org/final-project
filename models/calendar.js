const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  tutors: [ {type : Schema.Types.ObjectId, ref : 'Tutors'} ]
});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;