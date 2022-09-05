import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GraphSchema = new Schema({
  _id: ObjectId,
  model_id: Schema.Types.ObjectId,
  url: String,
  cloudinary_id: String
});

const Graph = mongoose.models.Graph || mongoose.model('Graph', GraphSchema);
export default Graph;