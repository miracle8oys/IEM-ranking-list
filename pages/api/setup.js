import dbConnect from "../../utils/dbConnect";
import Setup from "../../models/setup";
import mongoose from "mongoose";


export default async (req, res) => {
    await dbConnect();

    const {method} = req;

    switch (method) {
        case 'POST':
            
            const {name} = req.body;
            
            try {

                const setup = await Setup.create({
                    _id: mongoose.Types.ObjectId(),
                    name,
                });

                res.status(201).json({
                    data: setup
                })
                
            } catch (err) {

                res.status(400).json({ success: false, err });
            }

            break;
        case 'GET':

            try {

                const setup = await Setup.find({})

                res.status(200).json({
                    data: setup
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