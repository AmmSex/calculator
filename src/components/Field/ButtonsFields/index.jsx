import React from 'react'
import Button from '@mui/material/Button';
import './style.css'


const ButtonFields = ({setCalc, calc}) => {
    const button = {
        width: 90,
        height: 90,
        fontSize: '30px',
        margin: '15px'
    }

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

    const signClickHandler = (el) => {
        setCalc({
            ...calc, 
            sign: el,
            res: !calc.res &&calc.num ? calc.num : calc.res,
            num: ''
        })
    }

    const commaClickHandler = (el) => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') && calc.num === '' ? 0 + el : !calc.num.toString().includes('.') ? calc.num + el : calc.num
        })
    }

    const equalsClickHandler = () => {
        if(calc.res && calc.num){
            let math = (a, b, sign) => 
                sign === '+' ? a+b :
                sign === '-' ? a-b :
                sign === '*' ? a*b : a/b;

            setCalc({
                ...calc,
                res: (calc.num === '0' && calc.sign === '/') ? 'Can\'t divide with 0' : math(Number(calc.res), Number(calc.num), calc.sign),
                sign: '',
                num: ''  
            })  
        }
    }

    const buttonClickHandle = (el) => {
        setCalc({
            ...calc,
            num: calc.num + el,
        })
    }

    const sendHistory = () => {
        setCalc({
            ...calc,
            history: calc.history.push({expression: (calc.res+calc.sign+calc.num)})
        })
    }

    const handleClick = (value)  => {
        switch (value){
            case "C":
                resetClickHandle(value);
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                signClickHandler(value);
                break;
            case '.':
                commaClickHandler(value);
                break;
            case '=':
                sendHistory();
                equalsClickHandler(value);
                //resetClickHandle();
                break;
            default:
                buttonClickHandle(value);
        }
    }

    const buttonsF = buttons.map(el => <Button 
                                            key={el.id} 
                                            style={button} 
                                            type='button' 
                                            value={el.value} 
                                            variant="outlined" 
                                            onClick={() => handleClick(el.value)}>
                                                {el.value}
                                        </Button>);

    return(
        <div className='buttonsField' >
            {
                buttonsF
            }            
        </div>
        
    )
}

export default ButtonFields