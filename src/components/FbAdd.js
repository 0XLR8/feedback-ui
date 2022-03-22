import { useContext, useEffect, useState } from "react";
import FbContext from "../context/FbContext";
import FbRating from "./FbRating";

const FbAdd = () => {

    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);

    const { editFb, handleAddFeedback, updateFbEdit } = useContext(FbContext); 

    const handleRating = (num) => {
        setRating(num)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text !== ""){
            setText("");
            if(editFb.edit){
                updateFbEdit({id: editFb.item.id, text, rating});
            }else{
                handleAddFeedback({text, rating})
            }
        }
    }

    useEffect(() => {
        if(editFb.edit){
            setRating(editFb.item.rating);
            setText(editFb.item.text);
        }
    }, [editFb])

    const formatButton = () => {
        return editFb.edit ? "Update" : "Send"
    }

    return(
        <form className="fb-add cloud my-4" onSubmit={handleSubmit}>
            <h2 className="mb-3">How would you rate your experience with us?</h2>
            <FbRating rating={rating} handleRating={handleRating} />
            <div className="fb-submit">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a review..." />
                <button>{formatButton()}</button>
            </div>
        </form>
    )
}

export default FbAdd;