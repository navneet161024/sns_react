import { Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';

import Modal from "./components/modal/modal.component";
import ReviewModal from './components/review-modal/review-modal.component';
import Background from './components/background/background.component';


//Route
import Blog from './routes/blog/blog.route';
import Home from "./routes/home/home.route";
import About from "./routes/about/about.route";
import Session from "./routes/sessions/session.route";
import Contact from "./routes/contact-us/contact-us.route";
import SignIn from "./routes/sign-in/sign-in.route";
import SignUp from "./routes/sign-up/sign-up.route";
import BlogPost from './routes/blog-post/blog-post.route';

function App() {
  return (
    <Fragment>
    <Routes >
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/session" element={<Session />} ></Route>
      <Route path="/blog" element={<Blog />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/signin" element={<SignIn />} ></Route>
      <Route path="/signup" element={<SignUp />} ></Route>
      <Route path="/blogpost" element={<BlogPost />}></Route>
    </Routes>
    </Fragment>
  );
}

export default App;
