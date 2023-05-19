import "./contact-us.style.css";
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';
import Background from "../../components/background/background.component";

const ContactUs=()=>{
    return(
        <>
        <Navbar />
        <Background />
        <div className="contact-us ">
            <h1 className="text-center">Contact Us</h1>
            <h5 className="text-center">For all enquiries, feedbacks and testimonials, please email us using the form below</h5>
        <form>
        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  />
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Reason of Contact</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Categories</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Testimonials</option>
      <option>Enquiry</option>
      <option>Feedback</option>
    </select>
  </div>
  <button type="submit" class="btn btn-success px-2 mx-2">Submit</button>
</form>
        </div>
        <Footer />
        </>
    );
}

export default ContactUs;