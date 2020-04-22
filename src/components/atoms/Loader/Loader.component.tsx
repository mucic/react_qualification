import React from 'react'
import * as Styled from "./Loader.styles";

function Loader(): JSX.Element {
    return (
        <Styled.Container>
            <div className="loader"></div>
        </Styled.Container>
    )
}

export default Loader as React.FC
