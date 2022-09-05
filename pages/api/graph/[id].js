import nextConnect from "next-connect";
import multer from "multer";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
import Graph from "../../../models/graph";

const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.fGgLLSMqwSHZ6Kz8uDC2rSBNBIg;
const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;

cloudinary.v2.config({ 
    cloud_name: cloud_name, 
    api_key: api_key, 
    api_secret: api_secret 
  });

// const storage = multer.diskStorage({});

const upload = multer({
    // storage: storage
    dest: '../../../public'
  });
  
  const apiRoute = nextConnect({
    onError(error, req, res) {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
  });

apiRoute.use(upload.array('graph'));
apiRoute.post(async (req, res) => {

    try {

      const {id} = req.query;
      const uploadPromises = [];

      req.files.forEach(item => {
          uploadPromises.push(cloudinary.v2.uploader.upload(item.path))
      });

      const uploadImage = await Promise.all(uploadPromises);

      const storePromises = []

      uploadImage.forEach(item => {
        storePromises.push(
          Graph.create({
            _id: mongoose.Types.ObjectId(),
            model_id: id,
            url: item.url,
            cloudinary_id: item.public_id
        })
        )
      });

      const storeGraph = await Promise.all(storePromises);

      res.status(201).json({
          data: storeGraph
      })
      
  } catch (err) {

      res.status(400).json({ success: false, err: err.message });
  }

  //res.status(200).json({ data: uploadImage });
});

apiRoute.delete(async (req, res) => {
  try {
    const {id} = req.query;
    const graph = await Graph.findById(id)
    await cloudinary.v2.uploader.destroy(graph.cloudinary_id);
    const deleteData = await graph.remove();
    
    res.status(201).json({
        data: deleteData
    })
    
  } catch (err) {
      res.status(400).json({ success: false, err: err.message });
  }
})

// apiRoute.get(async (req, res) => {

//   try {

//     const {id} = req.query;

//     const iem = await Iems.aggregate([
//       {$match: {_id: mongoose.Types.ObjectId(`${id}`)}},
//       {$limit: 1},
//       {
//           $lookup: {
//             from: 'graphs',
//             localField: "_id",
//             foreignField: "model_id",
//             as: "iemGraph"
//         }
//       }
//     ]);

//     res.status(201).json({
//       data: iem[0]
//   })

    
//   } catch (err) {
//     res.status(400).json({ success: false, err: err.message });
//   }

// })

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

// Backend
// import formidable from 'formidable';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async (req, res) => {
//   const form = new formidable.IncomingForm();
//   form.uploadDir = "../../../public";
//   form.keepExtensions = true;
//   form.parse(req, (err, fields, files) => {
//     console.log(err, fields, files);
//   });
// };