import dbConnect from "../../../utils/dbConnect";
import Iems from "../../../models/iems";
import mongoose from "mongoose";


export default async (req, res) => {
    await dbConnect();

    const {method} = req;

    switch (method) {
        
        case 'GET':

            try {

                const {id} = req.query;

                const iem = await Iems.aggregate([
                    {$match: {_id: mongoose.Types.ObjectId(`${id}`)}},
                    {$limit: 1},
                    {
                        $lookup: {
                          from: 'graphs',
                          localField: "_id",
                          foreignField: "model_id",
                          as: "iemGraph"
                      }
                    },
                    {
                        $lookup: {
                            from: 'signatures',
                            localField: "signature_id",
                            foreignField: "_id",
                            as: "iemSignature"
                        }
                    },
                    {
                        $unwind: '$iemSignature'
                    },
                    {
                        $lookup: {
                            from: 'setups',
                            localField: "setup_id",
                            foreignField: "_id",
                            as: "iemSetup"
                        }
                    },
                    {
                        $unwind: '$iemSetup'
                    },
                  ]);
              
                  res.status(201).json({
                    data: iem[0]
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