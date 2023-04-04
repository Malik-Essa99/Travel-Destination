import Header from "../header/Header";
import Tours from "../tours/Tours";

function Home(props) {
    console.log(props.data)
    return (
        <>
            <Header />
            <Tours data={props.data}/>
        </>

    )
}
export default Home;