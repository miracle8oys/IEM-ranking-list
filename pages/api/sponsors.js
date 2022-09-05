import dbConnect from "../../utils/dbConnect";
import Sponsors from "../../models/sponsors";
import mongoose from "mongoose";


export default async (req, res) => {
    await dbConnect();

    const {method} = req;

    switch (method) {
        case 'POST':
            
            const {name, url, pic} = req.body;
            
            try {

                const sponsors = await Sponsors.create({
                    _id: mongoose.Types.ObjectId(),
                    name,
                    url,
                    pic
                });

                res.status(201).json({
                    data: sponsors
                })
                
            } catch (err) {

                res.status(400).json({ success: false, err });
            }

            break;
        case 'GET':

            try {

                const sponsors = await Sponsors.find({})

                res.status(200).json({
                    data: sponsors
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