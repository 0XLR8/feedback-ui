import { useContext } from "react";
import { FaTimes, FaRegEdit } from "react-icons/fa";
import FbContext from "../context/FbContext";

const FbReview = ({feedback}) => {

    const {handleDelete, handleEdit} = useContext(FbContext);
    const {id, text, rating} = feedback;
    

    return(
        <div className="fb-review cloud">
            <p>{text}</p>
            <span className="rating-num">{rating}</span>
            <FaTimes className="icon icon-close" onClick={() => handleDelete(id)}/>
            <FaRegEdit className="icon icon-edit" onClick={() => handleEdit({id, text, rating})}/>
        </div>
    )
}

export default FbReview;