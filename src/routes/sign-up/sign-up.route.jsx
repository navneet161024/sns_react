import "./sign-up.style.css";
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';
import Background from "../../components/background/background.component";
import {FcGoogle} from "react-icons/fc";
import book from "../../assets/icon/book.jpg";


const SignUp=()=>{
    return(
        <>
        <Navbar />
        <Background />
        <div className="sign-up">
            <h1 className="text-center">Sign Up</h1>
        <form>
        <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first Name" />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter second Name" />
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  />
  </div>
  <button type="submit" class="btn btn-success px-2 mx-2">Submit</button>
  <button type="submit" class="btn btn-light px-2 mx-2">Forgot Password</button>
</form>
        </div>
        <h6 className="text-center">Sign in with <FcGoogle  /> &nbsp;
 or <a href=""><img src={book} width="20" height="20"  /></a></h6>
        <h6 className="text-center"><Link to="/signin">Existing User? Login</Link></h6>
        <Footer />
        </>
    );
}

export default SignUp;