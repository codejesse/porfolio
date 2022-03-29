import styled from 'styled-components';
import { motion } from "framer-motion";

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10rem;
    @media (max-width: 768px) {
        margin: auto;
    }
`;

const AboutHeader = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Poppins", sans-serif;
    font-size: 2.3rem;
    justify-content: center;
    @media (max-width: 500px) {
        flex-direction: column;
        font-size: 1.5rem;
        text-align: center;
    }
`;

const AboutPara = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    line-height: 54px;
    text-align: center;
`;

const line1 = "Hello there i'm Jesse Beke a Front-End developer with 3 years of web experience crafting awesome websites and web applications that scale."
const line2 = 'When i am not coding i watch youTube videos and listen to my spotify playlist p.s i love rap'

const sentence = {
    hidden: { opacity: 1 },
    offscreen: {
        y: 300
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    }
}

function About() {
    return (
        <AboutWrapper>
            <AboutHeader>
                <img src='About.png' alt='about' />
                <h1>About me</h1>
            </AboutHeader>
            <AboutPara>
                <motion.p
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {line1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                    <br />
                    {line2.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                </motion.p>
            </AboutPara>
        </AboutWrapper>
    )
}
export default About;