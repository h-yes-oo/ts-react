import * as React from 'react';
import { useState, useRef } from 'react';

// <> === React.Fragment 이기 때문에 첫줄에서 React를 꼭 import 해와야 한다
const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random()*9))
    const [second, setSecond] = React.useState(Math.ceil(Math.random()*9))
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputE1 = useRef<HTMLInputElement>(null);

    const onSubmitForm = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = inputE1.current;
        if (parseInt(value) === first * second) {
            setResult('정답');
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue('');
            if(input){
                input.focus();
            }
        } else {
            setResult('땡');
            setValue('');
            if(input){
                input.focus();
            }
        }
    }
    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref = {inputE1}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <div>{result}</div>
        </>
    )
}

export default GuGuDan;