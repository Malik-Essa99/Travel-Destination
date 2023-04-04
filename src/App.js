import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/home/Home"
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/footer/Footer';
import TourDetails from "./Components/TourDetails/TourDetails";
// import { Routes, Route } from "react-router-dom";
const tourData = require("./data/db.json");

function App() {
  function getInfo(props){

  }
  return (
    <>
    <NavBar />
    <div className="mainDiv">
    {/* <Home data={tourData}/> */}
    <Routes>
        <Route exact path="/" element={<Home data={tourData}/>}/>
        {/* <Route path={`/${props.element.name}/${props.element.id}`} element={<TourDetails />}/> */}
        <Route exact path={"/:city/:id"} element={<TourDetails data={tourData}/>}/>
    </Routes>
    </div>
    <Footer />
    
    </>
  );
}

export default App;
