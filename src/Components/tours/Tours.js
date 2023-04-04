import Tour from "./Tour/Tour";
function Tours(props) {
    console.log(props,"111")
    return (
       <>
       {
        props.data.map(element =>{
            console.log(props.info)
            return(
                <Tour element={element} />
            )
        })
       }
         {/* <Tour data={props.data}/> */}
       </>
            
    )
}
export default Tours;