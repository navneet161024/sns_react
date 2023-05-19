import "./blog-card.style.css";
import image from "../../assets/image/image1.jpg";
import { Link } from "react-router-dom";
const BlogCard=({post})=>{
    let post_summary=post.post_body.slice(0,50);
    return(
        <>
                                <div className="blog-card">
     <div className="bcard card  shadow-lg my-2 mx-auto text-center">
                <div className="text-center my-2">
                <img src={image} alt="" width="400px" height="250px"/>
                </div>
                <h3>{post.post_title}</h3>
                <p>Yoga is an ancient practice that dates back thousands of years in India.
                It focuses on achieving a positive outlook towards life and finding serenity and peace within... </p>
                <Link to="/blogpost" state={post}>Read More</Link>  
            </div> 
        </div>
        </>
    );
}

export default BlogCard;