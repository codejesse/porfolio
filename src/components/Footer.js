import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 12rem;
  background-color: black;
  height: auto;
  width: 100%;
  border-radius: 2rem;
  @media(max-width: 768px) {
    height: 50vh;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: left;
  width: auto;
  padding: 5rem; 
  @media(max-width: 768px) {
    padding: 0;
    height: 12rem;
  }
`;

const FooterDetails = styled.div`
  color: white;
  text-align: right;
  margin: auto;
  font-size: 6.5vw;
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterLogo>
        <img src='black.png' alt='logo' />
        <FooterDetails>
          Reach me
          <ContactDetails>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/jesse-beke/'><img width={80} height={80} src="LinkedIn.png" alt='twitter' /></a>
            <a target="_blank" rel="noreferrer" href='https://github.com/codejesse/'><img width={80} height={80} src="GitHub.png" alt='twitter' /></a>
            <a target="_blank" rel="noreferrer" href='https://twitter.com/jessebeke'><img width={80} height={80} src="Twitter.png" alt='twitter' /></a>
            <a target="_blank" rel="noreferrer" href="mailto:jessebeke10@gmail.com"><img width={80} height={80}  src="Gmail.png" alt='twitter' /></a>
          </ContactDetails>
        </FooterDetails>
      </FooterLogo>
    </FooterWrapper>
  )
}
export default Footer;