import Router from "next/router";
import rankSymbols from "../../utils/rankSymbols";
import valueSymbols from "../../utils/valueSymbols";
import Image from "next/image";
import {BiArrowBack} from "react-icons/bi";

const IemDetail = ({iem}) => {
    return ( 
        <div className="flex justify-center">
            <div className="md:w-[70vw] w-[90vw]">
                <p onClick={() => Router.back()}><BiArrowBack className="mt-2 md:text-2xl text-xl hover:text-3xl" /></p>
                <p className="text-center text-xl font-semibold pb-2">{iem.data?.model}</p>
                <p className="text-center text-xl font-semibold pb-2">{rankSymbols(iem.data?.rank)}</p>
                <div className="flex justify-center text-2xl mb-2">
                    {valueSymbols(iem.data?.value)}
                </div>
                <p className="text-center font-semibold mb-2">$ {iem.data?.price}</p>
                <p className="text-center">{iem.data?.comments}</p>
                {iem.data?.iemGraph.map(item => (
                        <div key={item._id} className="py-5 flex justify-center w-full">
                            <Image onClick={() => {setShowModalDelete(true); setGraph_id(item._id)}} src={item.url} alt="graph-iem" width={700} height={350} />
                            {/* <img src={item.url} alt="graph-iem" /> */}
                        </div>
                    ))}
            </div>
        </div>
     );
}
 
export default IemDetail;