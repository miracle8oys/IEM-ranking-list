const Sponsors = ({sponsorsData}) => {

    return ( 
        <div>
            <p className="text-center text-sm pb-3 text-thertiary dark:text-secondary font-semibold">In-Ear Fidelity is supported by the following:</p>
            <div className="grid justify-center items-center grid-cols-3 md:gap-x-40 gap-x-5 md:gap-y-10 gap-y-2">
                {sponsorsData?.data?.map(item => (
                    <div key={item._id} className="border-2">
                        <a href={item.url} target="_blank">
                            <img src={item.pic} alt="sponsor" />
                        </a>
                    </div>
                ))}
            </div>
            <p className="text-center text-sm pt-3 text-thertiary dark:text-secondary font-semibold">Support those who support us!</p>
        </div>
     );
}
 
export default Sponsors;