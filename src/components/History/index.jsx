import React from 'react'
import styled from 'styled-components'
import './style.css'

const P = styled.p`
        color: black;
        font-size: 16px;
        font-weight: 500;
    `
const History = ({calc}) => {
    
    return(
        <div className='history'>
            <P>History</P>
            <div className='historyValue'>
                {
                    calc.history.map((el, ind) => <p key={ind}>{el.expression}</p>)
                }
            </div>
            
        </div>
    )
}

export default History