import dbConnect from "../../../utils/dbConnect";
import Iems from "../../../models/iems";
import mongoose from "mongoose";


export default async (req, res) => {
    await dbConnect();

    const {method} = req;

    switch (method) {
        
        case 'GET':

            try {

                const iems = await Iems.find();
              
                  res.status(201).json({
                    data: iems
                })
                
            } catch (err) {
                res.status(400).json({ success: false, err: err.message });
            }

            break;
    
        default:
            res.status(400).json({ success: false });

            break;
    }
}