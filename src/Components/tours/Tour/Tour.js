// import TourDetails from "../../TourDetails/TourDetails";
// import { Link, useParams } from 'react-router-dom';

import { Link } from "react-router-dom";

// import { useState } from "react";

function Tour(props) {
    // let { id } = useParams();

    // const [details, setdetailsState] = useState(false);
    // props.info.getInfo(2000);
    // function moreDetailsHandler(){
    //     // setdetailsState(true);
    //     props.info.getInfo(props.element)
    // }
    // console.log(props.info);
    // props.info.getInfo("hhhh")

    return (
        <> 
            {/* <Link to={`/${props.element.name}/${props.element.id}`} onClick={moreDetailsHandler}> */}
            {/* <Link to="/a" onClick={moreDetailsHandler}> */}
            <Link to={`/city/${props.element.id}`}>
            <div className={"card"} style={{"width":"300px"}}>
                <h2>{props.element.name}</h2>
                <img style={{"width":"400px"}} src={props.element.image} alt={props.element.name} />
            </div>
            </Link>
            
        </>
    )
}
export default Tour;