import "./session-card.style.css";
import Modal from "../../components/modal/modal.component";
import { useState } from "react";
const SessionCard=({head,body})=>{
    const [toggle,Settoggle]=useState(false);
    const handleClick=()=>{
        console.log("m");
        Settoggle(!toggle);
    }
    return(
        <>
        <Modal toggle={toggle} settoogle={Settoggle} topic={head} />
        <div className="session-card m-4">
            <div className="scard shadow-lg card px-4 pt-4 mx-2 h-100">
                <h4>{head}</h4>
                <p>{body}</p>
                <button className="btn btn-success text-dark" onClick={handleClick}>Book Now</button>
            </div>
        </div>
        </>
    );
}

export default SessionCard;