import { Link } from "react-router-dom";

const About = () => {
    return(
        <div className="about cloud">
            <h2 className="mb-3">About This Project</h2>
            <p>This is a React app to leave feedback for a product or service.</p>
            <p>Version: 1.0.0</p>
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default About;