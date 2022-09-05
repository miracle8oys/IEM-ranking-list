import dbConnect from "../../utils/dbConnect";
import Signature from "../../models/signature";
import mongoose from "mongoose";


export default async (req, res) => {
    await dbConnect();

    const {method} = req;

    switch (method) {
        case 'POST':
            
            const {name} = req.body;
            
            try {

                const signature = await Signature.create({
                    _id: mongoose.Types.ObjectId(),
                    name,
                });

                res.status(201).json({
                    data: signature
                })
                
            } catch (err) {

                res.status(400).json({ success: false, err });
            }

            break;
        case 'GET':

            try {

                const signature = await Signature.find({})

                res.status(200).json({
                    data: signature
                })
                
            } catch (err) {
                res.status(400).json({ success: false, err });
            }

            break;
    
        default:
            res.status(400).json({ success: false });

            break;
    }
}