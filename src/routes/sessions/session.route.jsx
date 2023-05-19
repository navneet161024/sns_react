import "./session.style.css";
import SessionCard from "../../components/session-card/session-card.component";
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';
import Background from "../../components/background/background.component";
import { useLocation } from "react-router-dom";
const Session=()=>{
   
    const location=useLocation();
    const data=location.state;
    console.log(data.name);
    
    return(
        <>
        <Navbar />
        <Background />
        <div className="session">
            <h1 className="text-center text-uppercase">{data.name}</h1>
            <h5 className="text-center">{data.desp} </h5>
            <div className="d-flex mx-4 flex-wrap justify-content-center">
                
                {data.services.map((single)=>{
                 return(   
                <SessionCard head={single.name} body={single.desp}  />
                 );
                })}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Session;