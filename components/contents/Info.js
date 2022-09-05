import Sponsors from "./Sponsors";
import {AiOutlineStar} from "react-icons/ai"

const Info = ({sponsors}) => {
    
    return ( 
        <>
            <h1 className="md:text-3xl text-xl font-bold font-serif dark:text-white">Crinacle's Ranking List</h1>
            <h1 className="md:text-2xl text-lg font-bold font-serif dark:text-white pb-5">IEMs & Earphones</h1>

            <div className="md:w-[50vw] w-[95vw] grid justify-center bg-white dark:bg-thertiary dark:text-white shadow-xl pb-7 pt-2 px-7 rounded">
                    <div>
                        <h1 className="md:text-2xl text-lg font-semibold text-center">Grades</h1>
                        <p><span className="font-semibold pr-1">S :</span> Must try. Experience what the best has to offer.</p>
                        <p><span className="font-semibold pr-1">A :</span> While not at the top of the summit, Grade-A IEMs are still very respectable performers that would still be considered as some of the best by many.</p>
                        <p><span className="font-semibold pr-1">B :</span> Can essentially be described as “very good”, or excellent performers in their own right.</p>
                        <p><span className="font-semibold pr-1">C :</span> Average in the grand scheme of things, anywhere from “passable” to “good”.</p>
                        <p><span className="font-semibold pr-1">D :</span> The threshold for “bad” starts here.</p>
                        <p><span className="font-semibold pr-1">E :</span> The truly horrible.</p>
                        <p><span className="font-semibold pr-1">F :</span> The failures. One needs to literally sound broken to reach the depths of F-tier.</p>
                    </div>
            </div>
            <div className="md:w-[50vw] w-[95vw] flex justify-center my-7">
                <Sponsors sponsorsData={sponsors} />
            </div>
            <div className="grid justify-center bg-white dark:bg-thertiary dark:text-white shadow-xl py-7 px-10 md:w-[50vw] w-[95vw] my-7 rounded">
                    <div>
                        <h1 className="text-xl font-bold text-center py-3">Value Rating</h1>
                        <p className="flex items-center py-2"><span className="font-semibold"><AiOutlineStar /></span>: “Worth the price” (MSRP)</p>
                        <p className="flex items-center py-2 pl-7">– Only those with an overall rank of “C+” or above are considered for their first star.</p>
                        <p className="flex items-center py-2 pl-7">– Discontinued models are not eligible.</p>
                        <p className="flex items-center py-2"><span className="font-semibold flex"><AiOutlineStar /> <AiOutlineStar /></span>: “Redefines the price bracket”</p>
                        <p className="flex items-center py-2"><span className="font-semibold flex"><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>: “Worth the Blind”</p>
                    </div>
            </div>
        </>
     );
}
 
export default Info;