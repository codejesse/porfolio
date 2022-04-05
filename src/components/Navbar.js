import styled from 'styled-components'
import '../App.css'
import { useState } from 'react';

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


function Navbar() {
    const [closedMenu, setClosedMenu] = useState(false)
    const [OpenMenu, setOpenMenu] = useState(false)
    return (
        <NavWrapper>
            <img className='global-logo' src='logo.png' alt='logo' />
        </NavWrapper>
    )
}
export default Navbar