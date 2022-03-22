import { useContext } from "react";
import FbReview from "../components/FbReview";
import FbContext from "../context/FbContext";

const FbList = () => {

    const { feedback } = useContext(FbContext);

    return(
        <div className="fb-list">
           {
               feedback.map(value => {
                   return <FbReview key={value.id} feedback={value} />
               })
           }
        </div>
    )
}

export default FbList;