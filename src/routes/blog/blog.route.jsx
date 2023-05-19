import BlogCard from "../../components/blog-card/blog-card.component";
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';
import Background from "../../components/background/background.component";
import "./blog.style.css";
import { useLocation } from "react-router-dom";
const Blog=()=>{
    const location=useLocation();
    const data=location.state;
    return(
        <>
        <Navbar />
        <Background />
        <div className="blog">
            <h1 className="text-center text-capitalize ">{data.name}</h1>
            <h5 className="text-center">{data.desp}</h5>
            <div className="">
                {data.post.map((single)=>{
                return(
                <BlogCard post={single} />
                );
                    })}
            </div>
        </div>
        <Footer />
        </>
    );
}





export default Blog;