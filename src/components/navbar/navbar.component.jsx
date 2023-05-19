import "./navbar.style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import ser_data from "../../data/services.json";
import blog_data from "../../data/blogs.json";
import { useLocation } from "react-router-dom";

const Navbar=()=>{
    const loc=useLocation();
    console.log(loc.pathname=="/about");
    return(
        <>
        <nav class="navbar fixed navbar-expand-lg navbar-light bg-light p-3">
  <Link class="navbar-brand " to="/"><img src={logo} width="75px" height="50px" /></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav font-weight-bold">
      <li class="nav-item active">
        <Link class="nav-link " to="/" style={loc.pathname=="/"?{backgroundColor:"green"}:{}}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item" >
        <Link class="nav-link text-dark" to="/about" style={loc.pathname=="/about"?{backgroundColor:"green"}:{}}>About Us</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-dark"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={loc.pathname=="/session"?{backgroundColor:"green"}:{}}>
          Yoga Sessions
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          {ser_data.map((data)=>{
            return(
          <Link class="dropdown-item text-capitalize" to="/session" state={data}>{data.name}</Link>
            );
          }
          )}
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={loc.pathname=="/blog"?{backgroundColor:"green"}:{}}>
          Blog 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          {blog_data.map((data)=>{
          return(
          <Link class="dropdown-item text-capitalize" to="/blog" state={data}>{data.name}</Link>
          );
          })}
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-dark" to="/contact" style={loc.pathname=="/contact"?{backgroundColor:"green"}:{}}>Contact</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-dark" to="/signin" style={loc.pathname=="/signin"?{backgroundColor:"green"}:{}}>Sign In</Link>
      </li>
    </ul>
  </div>
</nav>
        </>
    );

}

export default Navbar;