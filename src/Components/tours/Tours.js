function Tours(props) {
    // console.log(props+"111111111111")
    return (
        <div>
            <h2>{props.tour_name}</h2>
            <img src={props.tour_url} alt={props.tour_name}/>

            <h1>--------------------------------------------------------------------------</h1>
        </div>
            
    )
}
export default Tours;