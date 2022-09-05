import useFetch from "../../../utils/useFetch";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import GraphModal from "../../../components/admin/GraphModal";
import DeleteModal from "../../../components/admin/DeleteModal";

const Detail = () => {

    const router = useRouter();
    const {id} = router.query;
    const [changes, setChanges] = useState(0);

    const iem = useFetch(`/api/iems/${id}`, changes);

    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [graph_id, setGraph_id] = useState(false);

    return ( 
        <>
            <div className="flex justify-center">
                <div className="w-[70%]">
                    <h1 className="text-center text-2xl font-bold">{iem.data?.model}</h1>
                    <div className="grid justify-center">
                        <button className="text-center" onClick={() => setShowModal(true)}>
                            Add Graph
                        </button>
                    </div>
                    {iem.data?.iemGraph.map(item => (
                        <div key={item._id} className="py-5 flex justify-center w-full">
                            <Image onClick={() => {setShowModalDelete(true); setGraph_id(item._id)}} src={item.url} alt="graph-iem" width={700} height={350} />
                            {/* <img src={item.url} alt="graph-iem" /> */}
                        </div>
                    ))}
                </div>
            </div>
            <GraphModal showModal={showModal} setShowModal={setShowModal} id={id} setChanges={setChanges} />
            <DeleteModal showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} graph_id={graph_id} setGraph_id={setGraph_id}  />
        </>
     );
}
 
export default Detail;