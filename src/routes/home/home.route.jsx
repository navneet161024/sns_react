import image1 from "../../assets/image/image1.jpg";
import image2 from "../../assets/image/image2.jpg";
import image3 from "../../assets/image/image3.jpg";
import ReviewCard from '../../components/review-card/review-card.component';
import ServiceCard from '../../components/services-card/service-card.component';
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';
import review from "../../assets/review/review1.jpg";
import ReviewModal from "../../components/review-modal/review-modal.component";
import Background from "../../components/background/background.component";
import { useState } from "react";
import "./home.style.css";
import services_data from "../../data/services.json";
import { Link } from "react-router-dom";
const Home=()=>{
 
    return(
        <>
        <Navbar />
        <Background />
        <div className="home">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={image1} alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
    <h1>YOGA TAKES PLACE INTO THE PRESENT MOMENT.</h1>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={image2} alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
    <h1>LIFE GETS BETTER WITH A SMILE.</h1>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={image3} alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
    <h1>A SMILE CAN FIX EVERYTHING EVEN YOUR BACKACHE.</h1>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        <div className="about-us text-center mt-4 mx-4">
            <h1>ABOUT STRETCH'N'SMILE YOGA</h1>
            <h4 className="font-italic">
"Yoga takes you into the present moment, the only place where life exists." - Patanjali
</h4>
        <p>
        ‌Anything that you do with complete awareness is YOGA. Yoga offers us a chance to add energy, strength and beauty and soul. It is the art of finding peace from within. Yoga gives you an opportunity to be YOU, the true you.
        </p>
        <p>
        ‌ ‌Founded by Deepali Gupta, Stretch 'N' Smile yoga aims to make yoga a wholesome experience for everyone. It provides a space for practice and growth, and tools to make you a better version of yourself.   
        </p>
        <p>
        Yoga can happen anywhere, anytime, and in any form. There is no perfect place, time or attire for yoga. If you sit back and relax, take a deep breath and let the calmness flow through your body, yoga is happening to you. You cannot do yoga. In fact, yoga is your natural state.    
        </p>
        <Link to="/about">
        <button type="button" class="btn btn-success">Read More</button></Link>
        </div>
        <div className="services text-center ">
          <h2>Our Services</h2>
          <div className="d-lg-flex justify-content-center flex-wrap">
            {services_data.map((data)=>{
            return(
           <Link to="/session" state={data} ><ServiceCard image={data.image} name={data.name} /></Link>
            );
            }
              )}
          </div>
        </div>
        <div className="reviews text-center mt-3 py-3 justify-content-center">
          <h2 className="text-white">WHAT PEOPLE THINK ABOUT US</h2>
          <ReviewCard image={review} />
         
        </div>
        </div>
        <Footer />
        </>
    );
}


export default Home;