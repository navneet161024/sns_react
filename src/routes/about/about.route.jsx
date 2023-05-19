import "./about.style.css";
import image from "../../assets/image/image1.jpg";
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../../components/footer/footer.component';
import Background from "../../components/background/background.component";
const About=()=>{
    return(
        <>
        <Navbar />
        <Background />
        <div className="about_us text-center mx-5">
            <h1>ABOUT US</h1>
            <p>Stretch 'N' Smile began in 2021 as an initiative by Deepali Gupta, who wanted to make yoga accessible. It is an effort to introduce people to the transformative power of yoga and meditation. Inspiring movement and bringing balance between mind, body and soul is the core of what we do: it is our calling! Talking mindfulness from the mat and putting it to practice in life is what we aim for. Yoga is not about flexibility and stretching, it is much more than that. It is about the addition of energy, beauty, and strength to your mind, body and soul. Yoga is about staying grounded while your soul flies high. We believe that smiling is an important part of yoga and our lives. When you stretch with a smile, you will see all the inhibitions and fears disappear. </p>
            <p>At Stretch 'N' Smile, you will get access to live yoga classes, yoga videos, healthy recipes, yoga tips, and much more!. This is your one-stop shop to understand what makes you feel good. We believe in changing your lifestyle to a healthier and peaceful one. </p>
        </div>
            <h1 className="text-center ins">OUR INSTRUCTOR</h1>
        <div className="instructor row text-center mx-5">
            <div className="col-12 col-sm-6">
                <img src={image} alt=""  />
            </div>
            <div className="col-12 col-md-6  py-4">
                <h2 className="ins">Deepali Gupta, RYT 500 | E RYT 200 </h2>
                <p className="">The classes are led by Deepali, who has been praticing yoga for the last 20 years and teaching yoga for the last 4 years. She is also certified as a Kids, Prenatal and Postnatal yoga instructor. ‌Although Deepali is a Software Consultant by profession, Yoga is something that she is deeply passionate about. She finds solace in yoga and it helps her to find peace in the chaos of everyday life. According to Deepali, "Consistent practice of Yoga can help you move from effort to effortlessness". She believes in living a yogic life. To her, yoga is not just a form of workout, it is a way of life. </p>
            </div>
            <div className="col-12  col-md-6">
            </div>
            <div className=" col-12 col-md-6 ">
        <p className="font-italic "> ‌"Yoga is not about mastering a posture. It is about using posture to understand and transform yourself" - B. K. S. Iyengar </p>
        </div>
        
        </div>
        <Footer />
        </>
    );
}


export default About;