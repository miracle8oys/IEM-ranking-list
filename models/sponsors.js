import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SponsorsSchema = new Schema({
  _id: ObjectId,
  name: String,
  url: String,
  pic: String
});

const Sponsors = mongoose.models.Sponsors || mongoose.model('Sponsors', SponsorsSchema);
export default Sponsors;