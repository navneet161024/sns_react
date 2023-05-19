import "./review-card.style.css";
import data from "../../data/review.json";
import { useState,useEffect,useRef } from "react";
import ReviewModal from "../review-modal/review-modal.component";
const ReviewCard=({image})=>{
    const [toggle,Settoggle]=useState(false);
    const [pointer,Setpointer]=useState(0);
    const [review,Setreview]=useState({
        "name":"",
        "review":"",
        "short":""
    })
    const handleChange=(event)=>{
       console.log(event.target.innerText==">");
       if(event.target.innerText==">")
            (pointer+1)<data.length?Setpointer(pointer+1):Setpointer(0);
        else
        (pointer-1)>=0?Setpointer(pointer-1):Setpointer(data.length-1);
    }
    //console.log(data[0].name);
    useEffect(()=>{
        let short=(data[pointer].review).slice(0,80)+"..."
        Setreview({
            "name":data[pointer].name,
            "review":data[pointer].review,
            "short":short
        })
    },[pointer]);
    return(
        <>
        <div className="d-flex review-card m-3 justify-content-center">
            <div className="display-4 arrow " onClick={handleChange}>&lt;</div>
            <div className="r-card border  h-100 text-center pt-2 bg-light">
                <img src={image} width="50px" height="50px" className="rounded-circle my-2" />
                <h5>{review.name}</h5>
                <p>{review.short}</p>
                <a className="" onClick={()=> Settoggle(!toggle)} >Read More</a>
            </div>
            <div className="display-4 arrow"  onClick={handleChange}>&gt;</div>
        </div>
        <ReviewModal toggle={toggle} settoogle={Settoggle} data={data[pointer]}/>
        </>
    );
}

export default ReviewCard;