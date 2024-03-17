import "./About.css";
import ContributorSection from './ContributorSection';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import tick from './tick.png';
import archery from './archery.png';
import gun from './rightimg3.png'
import img1 from './prob1.png'
import img2 from './prob2.png'
import res1 from './resource1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faArrowUp} from '@fortawesome/free-solid-svg-icons'

const About = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".fromtop-anim, .fade-effect, .aboutrightsec, .left-img-effect, .right-img-effect");

        const observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    const [showScrollUpButton, setShowScrollUpButton] = React.useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const showButtonThreshold = 200;
  
        // Show the scroll-up button when the user scrolls down
        setShowScrollUpButton(scrollY > showButtonThreshold);
      };
  
      // Add event listener for scroll
      window.addEventListener("scroll", handleScroll);
  
      // Remove event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="about-banner">
                <div className="about-banner-front">
                    <div className="aboutleft"><div className="aboutleftsec fromtop-anim">AR Homespace</div>
                        <p className="abouleftseccont fade-effect">A web application for immersive augmented reality shopping experiences.</p></div>

                    <img src={gun} className="aboutrightsec" /> 


                </div>

            </div>
            <div>
                <h1 className="second-head fromtop-anim">Why ARSTORE ?</h1>
                <div className="prob-box">
                    <img src={img1} className="prob-img left-img-effect" />
                    <div className="about-prob fade-effect">
                        <p className="about-prob-header"><b>Problem</b></p>
                        <p className="about-prob-sol">Conventional e-commerce platforms often fall short in providing immersive product experiences, resulting in customer uncertainty regarding the appearance, suitability, and performance of items. This deficiency in visualization contributes to elevated return rates, as products may not align with customer expectations. Moreover, limited opportunities for online product interaction and exploration hinder customer engagement, posing challenges for e-commerce businesses in fostering meaningful customer experiences.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="prob-box2">

                    <div className="about-prob fade-effect">
                        <p className="about-prob-header" style={{ "padding": "1vh", "width": "70%" }}><b>Solution</b></p>
                        <p className="about-prob-sol2">Through the implementation of AR-Webstore, clientele gain the capability to seamlessly visualize products within their personal environments, thereby facilitating a comprehensive examination of virtual attributes. This empowerment fosters informed decision-making among customers, subsequently mitigating return rates and amplifying engagement levels. As a result, the integration of AR-Webstore augments the shopping experience, offering a heightened sense of satisfaction and immersion for consumers.</p>
                    </div>
                    <img src={img2} className="prob-img2 right-img-effect" />
                </div>
            </div>
            <div className="about-goals-box">

                <div className="status fade-effect">
                    <h1 className="status-header fromtop-anim" style={{ "color": " #EEE7DA" }}>Current Status</h1>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">E-commerce products with 3D models for 360° viewing</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">Photorealistic 3D models for immersive shopping experiences.</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">360° viewer for detailed inspection of chairs, frames, and cars.</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">Explore products in your space using augmented reality.</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={tick} className="fromtop-anim" /><p className="status-points fromtop-anim">Augmented reality for in-home product exploration.</p></div>
                </div>
                <div className="status fade-effect">
                    <h1 className="status-header fromtop-anim" style={{ "color": "#EEE7DA" }}>Future Goals</h1>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={archery} className="fromtop-anim" /><p className="status-points fromtop-anim">Build an e-commerce platform providing an immersive shopping experience.</p></div>
                    <div style={{ "display": "flex" }}><img style={{ "height": "40px", "display": "block", "margin": "4vh 2vh 0 0" }} src={archery} className="fromtop-anim" /><p className="status-points fromtop-anim">Make the products interactive in a real environment rather than just demonstrating static
                        3D models using ML-AI.</p></div>

                </div>

            </div>
            <h1 className="second-head fromtop-anim">Learning Exposure !</h1>
            <div className="learning-about-block">
                <div className="learning-about fade-effect" style={{ "flex": "1.8" }}><span className="fade-effect text-content">
                    {/* <b>XR</b>, or  <b>Extended Reality</b>, is an exciting technology that combines the real world with
                    virtual elements. As a student interested in XR, while contributing to this project,
                    you will learn about the technical aspects of XR, which involve understanding how to
                    create and render virtual objects, recognize and track objects in the real world,
                    and explore how users interact with virtual environments, ensuring intuitive and
                    immersive experiences. <p>While studying XR, you can delve into programming technologies
                        like <i style={{ "color": "blueviolet" }}>Three.js</i> or <i style={{ "color": "blueviolet" }}>Unity</i> to develop interactive and immersive experiences.
                        You'll also explore 3D modelling and animation to create virtual objects
                        and environments.</p> */}
                    <b>Extended Reality (XR) </b>represents an innovative technology merging real-world elements with virtual components. As a student engaged in XR exploration, you will gain insights into its technical intricacies, encompassing the creation and rendering of virtual objects, object recognition and tracking in real-world settings, and the design of intuitive user interactions for immersive experiences.
                    <p>In the pursuit of XR proficiency, students will delve into programming frameworks such as <b>Three.js</b> or <b>Unity</b>, empowering them to craft interactive and captivating XR environments. Furthermore, a comprehensive understanding of 3D modeling and animation will facilitate the creation of lifelike virtual objects and immersive environments.</p>
                    This project offers a beginner-friendly approach to XR development, promising significant learning opportunities and the potential to innovate in this burgeoning field. By investing diligent effort, students can unlock the door to boundless creative possibilities and pave the way for groundbreaking advancements in XR technology.</span>
                    

                    {/* No no! Don't worry about some top of the world words mentioned above,
                    the project is completely beginner friendly 😅 !But if you give your best,
                    then you can really learn and build something out of the box for the future while working on this project,
                    // which I can ensure 😎!.</span> */}
                </div>
                <div className="learning-about fade-effect" style={{ display: "flex", flexDirection: "column", flex: "1.2" }}>
                    <p style={{ color: "#EEE7DA" }} className="fromtop-anim">
                        <b>Find some helpful resources below to start your journey in XR.</b>
                    </p>
                    <ul className="about-res-ul">
                        <li style={{marginBottom: "30px"}} >
                            <a href="https://codemaker2016.medium.com/develop-your-first-webar-app-using-webxr-and-three-js-7a437cb00a92">
                                <img className="res1-img fade-effect" src={res1} alt="Resource 1" style={{ height: "180px" }} />
                            </a>
                        </li>
                        <li>
                            <div className="yt-res-container fade-effect" style={{ height: "200px" }}>
                                <iframe
                                    className='yt-res'
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/gAzIkjkJSzM?si=66Slz3nUzBZC-b5i"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div><h1 className="second-head fromtop-anim">Project Admin</h1>
                <a href="https://github.com/ShwetKhatri2001"><div className="about-admin-box fade-effect"><img className="about-admin-img" src="https://avatars.githubusercontent.com/u/56475750?v=4" /><p className="about-admin">Shwet Khatri</p></div></a></div> */}
            <div><h1 className="second-head fromtop-anim" style={{ "marginTop": "13vh" }}>Contributors</h1>
                {/* <p className="second-head fromtop-anim" style={{ "color": "blue" }}><b>Credits go to these contributors:</b></p> */}
                <ContributorSection /> 


                {showScrollUpButton && (
        <button className='scroll-up-button' onClick={scrollToTop}>
<FontAwesomeIcon icon={faArrowUp} />
   </button>
      )}
            </div>
        </>

    );
};

export default About;
