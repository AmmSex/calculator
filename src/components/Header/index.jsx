import React from  'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import './style.css'


const Header = () => {
    const P = styled.p`
        color: white;
        font-size: 16px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    `
    
    return (
        <div className='header'>
            <P>Calculator App</P>
            <section className='menu'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/settings'>Settings</NavLink>
            </section>
        </div>
    )
}

export default Header