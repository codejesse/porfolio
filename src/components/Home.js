import styled from 'styled-components'

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: 42rem;
    background-image: url("background.png");
    background-repeat: no-repeat;
    background-position: center;
    @media(max-width: 600px) {
        width: 100%;
        background-size: contain;
    }
`;

const HeaderImage = styled.div`
    display: flex;
    justify-content: center;
`;

const HeaderText = styled.h1`
    text-align: center;
    font-size: 6.5vw;
    height: auto;
    font-family: 'Poppins',sans-serif;
    margin-top: -1rem;
`;

const HeaderPara = styled.p`
    text-align: center;
    font-size: 2.5vw;
    font-family: 'Open Sans', sans-serif;
    margin-top: -4rem;
    @media(max-width: 768px) {
        margin-top: 0;
    }
`;



function Home() {
    return (
        <HomeWrapper>
            <HeaderImage variants={Animation}><img className='header-img' src='Jesse.png' alt='jesse' /></HeaderImage>
            <HeaderText>Hello i'm Jesse Beke</HeaderText>
            <HeaderPara>FrontEnd Developer / UI/UX Designer</HeaderPara>
        </HomeWrapper>
    )
}
export default Home;