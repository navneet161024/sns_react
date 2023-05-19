import "./review-modal.style.css";
import { useRef } from "react";

const ReviewModal=({toggle,settoogle,data})=>{
    const modal=useRef();
    const onCLose=()=>{
        console.log(modal.current.style.display);
        modal.current.style.display="none";
        settoogle(!toggle);
    }
    return(
        <>
        {toggle&&(<div className="review-modal" ref={modal}>
            <div className="review-modal-custom card">
                <div className="review-modal-header text-center">
                <span className="modal-close" onClick={onCLose}>&#10006;</span>
                <h3>{data.name}</h3>
                </div>
                <div className="review-modal-body text-center px-2">
                    <p>{data.review}</p>
                </div>
            </div>
        </div>)}
        </>
    );
}
        
export default ReviewModal;