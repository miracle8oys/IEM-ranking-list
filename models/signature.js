import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SignatureSchema = new Schema({
  _id: ObjectId,
  name: String,
});

const Signature = mongoose.models.Signature || mongoose.model('Signature', SignatureSchema);
export default Signature;