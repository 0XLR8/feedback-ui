import { useContext } from "react";
import FbContext from "../context/FbContext";

const FbHud = () => {

    const { feedback } = useContext(FbContext);
    
    const averageRating = () => {
        let sum = 0;
        feedback.forEach(value => {
            sum = sum + value.rating;
        })
        return sum !== 0 ? (sum = sum/feedback.length).toFixed(1) : 0;
    }

    return(
        <div className="fb-hud d-flex justify-content-between">
            <p>{feedback.length} Reviews</p>
            <p>Average Rating: {averageRating()}</p>
        </div>
    )
}

export default FbHud;