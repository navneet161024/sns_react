import "./footer.style.css";
const Footer=()=>{
    return(
        <>
        <footer className="footer mx-100 text-center px-4  text-white">
            <h2>STRETCH'N'SMILE YOGA</h2>
            <p>
All the information on this website is published in good faith and for general information purpose only. Stretchnsmileyoga does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Stretchnsmileyoga), is strictly at your own risk. Stretchnsmileyoga will not be liable for any losses and/or damages in connection with the use of our website.</p>
            <div className="d-flex justify-content-center">
                <div className="p-2 "><i class="bi bi-envelope"></i></div>
                <div className="p-2"><i class="bi bi-facebook"></i></div>
                <div className="p-2"><i class="bi bi-instagram"></i></div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="px-1">Home</div>
                <div className="px-1">About</div>
                <div className="px-1">Contact</div>
                <div className="px-1">Blog</div>
            </div>
            <h6>Copyright ©ACESPIRE 2022</h6>
        </footer>
        </>
    )
}

export default Footer;