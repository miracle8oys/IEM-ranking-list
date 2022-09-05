import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SetupSchema = new Schema({
  _id: ObjectId,
  name: String,
});

const Setup = mongoose.models.Setup || mongoose.model('Setup', SetupSchema);
export default Setup;