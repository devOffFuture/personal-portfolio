import React from "react";
import Bruno from "../../assets/Bruno.jpeg"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; 
import "./home.css"

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Bruno} alt="" className="home__img"/>

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Bruno Nogueira.</span> Developer Web Jr
                    </h1>

                    <p className="home__description">
                    I am a Full Stack Junior Analyst and Developer. In 2021 I completed my technical training in Systems Analysis and Development at Etec Professor Basilides de Godoy. I am proficient in Html and Css, JavaScript, React.Js, Java, C#, SQL, Myql and Data Modeling. I am a former student at Instituto Proa who recently graduated as a Java Web Developer. I like new challenges to improve my knowledge, because I have the goal of being an even more qualified professional. Proactivity is a very strong characteristic of mine and I put it into practice by leaving my comfort zone and seeking new learning. I'm passionate about technology and knowledge!!
                    </p>

                    <Link to='/about' className="button">
                        More About Me{''}
                        <span className="button__icon">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    );
}

export default Home
