
import { useParams } from 'react-router-dom';
import  { useState } from 'react';

function TourDetails(props) {

    const [showDetails , setShowDetails] = useState(false);

    function seeMore(){
        setShowDetails(!showDetails);
    }
    console.log("See more ?",showDetails)

    const {id} = useParams();

    const details = props.data.find((element)=>{
        return element.id === id;
    })
    // console.log(chechId)
    
    return (
        <>
            <div style={{"width":"600px"}}>
            <h1>{`${details.name}`}</h1>
            {/* <p>{`${details.info.substr(0,245)}`}</p> */}
            {
               !showDetails && <p>{`${details.info.substr(0,245)} ...`}</p>
            }
            {
               showDetails && <p>{`${details.info}`}</p>
            }
            {
               !showDetails && <button onClick={seeMore}>See More</button>
            }
            {
               showDetails && <button onClick={seeMore}>See Less</button>
            }

            {/* <button onClick={seeMore}>See More</button> */}
            <h3>{` Price : ${details.price}`}</h3>
            <img style={{"width":"600px"}} src={details.image} alt={details.name} />
            </div>
                

        </>
    )
}
export default TourDetails