import { useContext } from "react";
import FbAdd from "../components/FbAdd";
import FbHud from "../components/FbHud";
import FbList from "../components/FbList";
import FbContext from "../context/FbContext";

const Home = () => {

    const { feedback, pending, error } = useContext(FbContext);

    return(
        <div className="home">
            { pending && <h2 className="message">Loading...</h2> }
            { error && <h2 className="message">There was an error. <br></br>Please try again.</h2>}
            { feedback && !error && 
            <>
                <FbAdd />
                <FbHud />
                <FbList />
            </>}
        </div>
    )
}

export default Home;