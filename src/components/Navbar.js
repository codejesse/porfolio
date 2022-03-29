import styled from 'styled-components'
import '../App.css'

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
    width: 98%;
    margin: auto;
    position: fixed;
    @media (max-width: 600px) {
        width: 96%;
    }
`;

const NavMenu = styled.div`
    display: flex;
    /* border: 1px solid black; */
    flex-direction: column;
    justify-content: center;
    margin-left: 65rem;
    width: 10%;
    @media (max-width: 768px) {
        margin-left: 16rem;
        width: auto;
    }
`;


function Navbar() {
    return (
        <NavWrapper>
            <img className='global-logo' src='logo.png' alt='logo' />
            <NavMenu>
                <p>menu</p>
            </NavMenu>
        </NavWrapper>
    )
}
export default Navbar