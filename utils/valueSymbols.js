import {AiOutlineStar} from "react-icons/ai";

function valueSymbols(value) {
    if (value === 0) {
        return (
            <>
                -
            </>  
        )            
    }

    if (value === 1) {
        return (
            <>
                <AiOutlineStar />
            </>
        )
    }
    if (value === 2) {
        return (
            <>
                <AiOutlineStar />
                <AiOutlineStar />
            </>
        )
    }

    if (value === 3) {
        return (
            <>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </>
        )
    }   
}

export default valueSymbols;