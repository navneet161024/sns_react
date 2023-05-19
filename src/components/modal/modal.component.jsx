import "./modal.style.css";
import Blog from "../../routes/blog/blog.route";
import { useRef } from "react";
const ModalCard=({toggle,settoogle,topic})=>{
    const modal=useRef();
    const onCLose=()=>{
        console.log(modal.current.style.display);
        modal.current.style.display="none";
        settoogle(!toggle);
    }
    return(
        <>
        {toggle&&(<div className="modal-card " ref={modal}>
            <div className=" shadow-lg card px-2 pt-1 mx-2 h-100 rounded">
                <div className="modal-card-header text-right">
                <span className="modal-close" onClick={onCLose}>&#10006;</span>
                </div>
                <div className="modal-card-body 4 pt-2">
                <form>    
                <div className="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter topics" value={topic} />
                </div>
                <div className="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter mobile number" />
                </div>
                <button type="button" className="btn btn-lg btn-block text-white bg-teal">Book Now</button>
                </form>
                </div>
            </div>
        </div>)}
        </>
    );
}

export default ModalCard;