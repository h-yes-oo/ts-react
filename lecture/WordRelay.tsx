import * as React from 'react';
import { useState, useCallback ,useRef } from 'react';

// <> === React.Fragment 이기 때문에 첫줄에서 React를 꼭 import 해와야 한다
const WordRelay = () => {
    const [value, setValue] = useState('');
    const [word, setWord] = useState('초밥');
    const [result, setResult] = useState('');
    const inputE1 = useRef<HTMLInputElement>(null);

    const onSubmitForm = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const input = inputE1.current;
        if(word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            if (input) {
                input.focus();
            }
        } else {
            setResult('땡');
            setValue('');
            if(input){
                input.focus();
            }
        }
    }, [value])

    const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
        setValue(e.currentTarget.value)
    },[]);

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref = {inputE1}
                    value={value}
                    onChange={onChange}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

export default WordRelay;