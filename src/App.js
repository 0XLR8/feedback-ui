import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { FbProvider } from "./context/FbContext";

const App = () => {
    return(
        <FbProvider>
            <Router>
                <Header />
                <div className="main pb-4">
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </FbProvider>
    )
}

export default App;