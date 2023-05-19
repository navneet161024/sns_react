import "./blog-post.style.css";
import image from "../../assets/image/image1.jpg";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import Background from "../../components/background/background.component";

const BlogPost=()=>{
    return(
        <>
        <Navbar />
        <Background />
        <div className="blog-post mx-5">
            <div className="blog-post-header text-center">
                <h1>Authentic Yogic Tea Recipe For Overall Health</h1>
                <img src={image} alt="" />
            </div>
            <div className="blog-post-body">
                <p>Tea is one of the most popular beverages all over the world. There are so many different types of tea that you can make. If you are addicted to tea and want to replace it with a healthier alternative, then yogic tea is the right choice for you. The tea is effortless to make and your house will be filled with so many different aromas. Moreover, the spices that are used for making the tea are good for your overall health and well-being. If you are wondering how to make yogic tea, then we have a simple recipe that will only take a few minutes. </p>
                <p>
                    <h4>Ingredients</h4>
                    <ul>
                        <li>2 cups of water</li>
                        <li>2 cardamom pods</li>
                        <li>2 cinnamon stick</li>
                        <li>1 small piece of ginger</li>
                        <li>1 green tea bag/half a spoon of green tea</li>
                        <li>Lemon (as per taste)</li>
                    </ul>
                    <ul>
                        <li>Add water to a pan and bring it to a boil. </li>
                        <li>Add cardamom pods (gently squash them with a knife), cinnamon sticks and ginger. </li>
                        <li>Bring them to a boil and add the green tea. </li>
                        <li>Cover the pan and let the ingredients simmer for 2-3 minutes. </li>
                        <li>Remove the pot from the heat, and let it cool. </li>
                        <li>Strain the tea. Serve hot.</li>
                    </ul>
                    <h4>Subtitutes</h4>
                    <p>If you do not have the whole spices, you can substitute them with powdered spices but the flavour will not be the same. </p>
                    <h4>Tips for Making and Serving the Tea</h4>
                    <ul>
                        <li>You can add lemon to the tea to enhance the taste but it is not compulsory. </li>
                        <li>Though the tea is delicious on its own, you can add a sweetener if you want. You can add some honey or agave as these pair well with the tea. </li>
                        <li>The recipe is for two cups of yogic tea. You can adjust the spices and water according to the cups of tea that you wish to make. </li>
                    </ul>
                </p>
            </div>
        </div>
        <Footer />
        </>
    );
}


export default BlogPost;