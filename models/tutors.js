const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorsSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  synopsis: String,
  main_subject: { type: String, required: true },
  availability: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Calendar"
    }
  ],
  profile_image: { },
});

const Tutors = mongoose.model("Tutors", tutorsSchema);

module.exports = Tutors;