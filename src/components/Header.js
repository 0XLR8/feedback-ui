import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header mb-4">
            <h1>Feedback UI</h1>
            <Link to="/about"><FaQuestion className="icon" /></Link>
        </div>
    )
}

export default Header;