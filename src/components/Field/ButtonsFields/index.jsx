import React from 'react'
import Button from '@mui/material/Button';
import './style.css'

const button = {
    width: 90,
    height: 90,
    fontSize: '30px',
    margin: '15px'
}
const ButtonFields = ({setCalc, calc}) => {
    const buttons = [
        {id: 1, value: '0'},
        {id: 2, value: '1'},
        {id: 3, value: '2'},
        {id: 4, value: '3'},
        {id: 5, value: '4'},
        {id: 6, value: '5'},
        {id: 7, value: '6'},
        {id: 8, value: '7'},
        {id: 9, value: '8'},
        {id: 10, value: '9'},
        {id: 11, value: '+'},
        {id: 12, value: '-'},
        {id: 13, value: '*'},
        {id: 14, value: '/'},
        {id: 15, value: '='},
        {id: 16, value: '.'},
        {id: 17, value: 'C'},
        {id: 18, value: 'CE'},
        {id: 19, value: '('},
        {id: 20, value: ')'},
    ]

   

    const resetClickHandle = () => {
        setCalc({
            ...calc, 
            num: '',
            sign: '',
            res: ''
        })
    }

    const signClickHandler = (event) => {
        let el = event.target.innerHTML[0];

        setCalc({
            ...calc, 
            sign: el,
            res: !calc.res &&calc.num ? calc.num : calc.res,
            num: ''
        })
        
        console.log('sign')
    }

    const commaClickHandler = (event) => {
        let el = event.target.innerHTML[0];
        console.log(',')
    
    }

    const equalsClickHandler = (event) => {
        let el = event.target.innerHTML[0];
        if(calc.res && calc.num){
            let math = (a, b, sign) => 
                sign === '+' ? a+b :
                sign === '-' ? a-b :
                sign === '*' ? a*b : a/b;


            setCalc({
                ...calc,
                res:  
                    (calc.num === '0' && calc.sign === '/') ? '' : math(Number(calc.res), Number(calc.num), calc.sign),
                sign: '',
                num: ''
            })
        
            
        }
        console.log('=')
        
    }

    const buttonClickHandle = (event) => {
        let el = event.target.innerHTML[0];
        setCalc({
            ...calc,
            num: el
        })
        console.log('button')
    }

    const buttonsF = buttons.map(el => <Button key={el.id} style={button} type='button' value={el.value} variant="outlined"
                                                onClick={
                                                    (el.value === 'C') ? resetClickHandle : 
                                                    (el.value === '+' || el.value === '-' || el.value === '/' || el.value === '*') ? signClickHandler :
                                                    el.value === '.' ? commaClickHandler :
                                                    el.value === '=' ? equalsClickHandler :
                                                    buttonClickHandle
                                                }
                                            >{el.value}</Button>);

    // const handleClickField = (event) => {
    //     let el = event.target.innerHTML[0];
    //     // setCalc({
    //     //     ...calc,
    //     //     num: el
    //     // });

    //     (el === 'C') ? resetClickHandle() : 
    //         (el === '+' || el === '-' || el === '/' || el === '*') ? signClickHandler() :
    //         el === '.' ? commaClickHandler() :
    //         el === '=' ? equalsClickHandler():
    //         buttonClickHandle();



    //     //console.log(element)
    // }

    return(
        <div className='buttonsField' >
            {
                buttonsF
            }            
        </div>
        
    )
}

export default ButtonFields