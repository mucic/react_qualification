import React from 'react'
import * as Styled from "./Input.styles";

interface InputProps {
    onChange: (value: string) => void,
    value: string;
}

function Input(props: InputProps): JSX.Element {
    const {onChange, value} = props;

    return (
        <Styled.Container>
            <input type="text" onChange={e => onChange(e.target.value)} value={value} />
        </Styled.Container>
    )
}

export default Input as React.FC<InputProps>
