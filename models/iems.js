import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const IemsSchema = new Schema({
  _id: ObjectId,
  rank: Number,
  value: Number,
  model: String,
  price: Number,
  signature_id: Schema.Types.ObjectId,
  comments: String,
  tone_grade: String,
  technical_grade: String,
  setup_id: Schema.Types.ObjectId,
});

const Iems = mongoose.models.Iems || mongoose.model('Iems', IemsSchema);
export default Iems;