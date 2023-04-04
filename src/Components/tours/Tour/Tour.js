// import TourDetails from "../../TourDetails/TourDetails";
// import { Link, useParams } from 'react-router-dom';

import { Link } from "react-router-dom";
import '../Tour/Tour.css'
// import { useState } from "react";

function Tour(props) {


    return (
        <>
        <div className="cards">
            <Link className="tour" to={`/${props.element.name}/${props.element.id}`}>
                <div className={"card"} style={{ "width": "300px" }}>
                    <h2>{props.element.name}</h2>
                    <img style={{ "width": "400px" }} src={props.element.image} alt={props.element.name} />
                </div>
            </Link>
        </div>

        </>
    )
}
export default Tour;