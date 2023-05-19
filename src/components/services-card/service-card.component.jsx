import "./service-card.style.css";

const ServiceCard=({image,name})=>{
   // const ser_image=require(image);
    return(
        <>
        <div className="servicecard text-center m-3 p-4">
            <img src={image} alt=""  width="250px" height="250px" className="rounded-circle"/>
            <h3 className="text-capitalize">{name}</h3>
        </div>
        </>
    );
}


export default ServiceCard;// d-lg-flex justify-content-center flex-wrap