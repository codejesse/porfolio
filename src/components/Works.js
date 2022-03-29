import styled from 'styled-components';
import { motion } from "framer-motion";

const WorksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const WorksHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 2.3rem;
    @media (max-width: 600px) {
        flex-direction: column;
        font-size: 1.5rem;
        text-align: center;
    }
`;

const Button = styled.button`
    width: 392px;
    height: 100px;
    background: #000000;
    border: none;
    border-radius: 35px;
    margin: auto;
    margin-top: 7rem;
    color: white;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;



const cardVariants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: -6,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8
        }
    }
};


function Works() {
    return (
        <WorksWrapper>
            <WorksHeader>
                <img src='works.png' alt='about' />
                <h1>Works</h1>
            </WorksHeader>
            <motion.div
                className='card-container'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div className='card' variants={cardVariants}>
                    <h1 className='card-Header test'>Wilding</h1>
                    <Links>
                        <a href="https://github.com/codejesse/wilding"><img width={60} height={60} src="GitHub.png" alt='twitter' /></a>
                        <a href="https://wilding.vercel.app/"><img width={60} height={60} src="Link.png" alt='twitter' /></a>
                    </Links>
                </motion.div>
                <motion.div className='card' variants={cardVariants}>
                    <h1 className='card-Header'>Space-x</h1>
                    <Links>
                        <a href="https://github.com/codejesse/spacex"><img width={60} height={60} src="GitHub.png" alt='twitter' /></a>
                        <a href="https://spaceex.vercel.app/"><img width={60} height={60} src="Link.png" alt='twitter' /></a>
                    </Links>
                </motion.div>
                <motion.div className='card' variants={cardVariants}>
                    <h1 className='card-Header'>Takenote</h1>
                    <Links>
                        <a href="https://github.com/codejesse/takenote"><img width={60} height={60} src="GitHub.png" alt='twitter' /></a>
                        <a href="https://takenote-liart.vercel.app/"><img width={60} height={60} src="Link.png" alt='twitter' /></a>
                    </Links>
                </motion.div>
            </motion.div>
            {/* <Button>Github for more</Button> */}
        </WorksWrapper>
    )
}
export default Works;