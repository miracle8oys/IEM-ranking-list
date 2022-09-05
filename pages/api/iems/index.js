import dbConnect from "../../../utils/dbConnect";
import Iems from "../../../models/iems";
import mongoose from "mongoose";


export default async (req, res) => {
    await dbConnect();

    const {method} = req;

    switch (method) {
        case 'POST':
            
            
            try {
                const {rank, value, model, price, signature_id, comments, tone_grade, technical_grade, setup_id} = req.body;

                const iem = await Iems.create({
                    _id: mongoose.Types.ObjectId(),
                    rank,
                    value,
                    model,
                    price,
                    signature_id,
                    comments,
                    tone_grade,
                    technical_grade,
                    setup_id
                });

                res.status(201).json({
                    data: iem
                })
                
            } catch (err) {

                res.status(400).json({ success: false, err });
            }

            break;
        case 'GET':

            try {
                //const rawKeyword = req.query.keyword ? req.query.keyword: '';
                let keyword = req.query.keyword;
                let limit = req.query.limit;
                let offset = req.query.offset;


                // const iem = await Iems.find({model: { $regex: keyword, $options: 'i' } }).limit(limit).skip(offset).sort('rank');
                const totalData = await Iems.count({model: { $regex: keyword, $options: 'i' } })

                // res.status(201).json({
                //     data: iem,
                //     totalData
                // })

                const iem = await Iems.aggregate([
                {
                    $match: {
                        model: { $regex: keyword, $options: 'i' } 
                    }
                },
                {
                    $sort: {
                        "rank": 1
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
                {
                    $limit: parseInt(limit) + parseInt(offset)
                },
                {
                    $skip: parseInt(offset)
                }
            ]);

                res.status(201).json({
                    data: iem,
                    totalData
                })
                
            } catch (err) {
                res.status(400).json({ success: false, err: err.message });
            }

            break;
        case 'PUT':
            
            try {
                const {id, rank, value, model, price, signature_id, comments, tone_grade, technical_grade, setup_id} = req.body;
                const iem = await Iems.findByIdAndUpdate(
                    {_id: id},
                    {
                        rank,
                        value,
                        model,
                        price,
                        signature_id,
                        comments,
                        tone_grade,
                        technical_grade,
                        setup_id
                    }

                )

                res.status(201).json({
                    data: iem
                })
                
            } catch (err) {

                res.status(400).json({ success: false, message: err.message });
            }

            break;
    
        default:
            res.status(400).json({ success: false });

            break;
    }
}