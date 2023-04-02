import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

function Home(props) {
    console.log(props)
    return (
        <>
            <Header />
            {
                props.data.map(tour => {
                    return (
                        <Tours tour_name={tour.name} tour_url={tour.image} />
                        // <Tours tour_name={tour.name} tour_url={tour.image} />
                    )
                })
            }
            <Footer />
        </>

    )
}
export default Home;