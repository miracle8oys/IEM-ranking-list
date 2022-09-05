import mongoose from 'mongoose'

const database_uri = process.env.CLOUDINARY_API_KEY;

let cached = global.mongoose;


if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect('mongodb+srv://miracle8oys:mrc201@cluster0.y4l4zrq.mongodb.net/?retryWrites=true&w=majority', opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn

}

export default dbConnect
