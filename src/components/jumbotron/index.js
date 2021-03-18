import React from 'react';
import {Inner} from './styles/jumbotron'

export default function Jumbotron({children, direction = 'row', ...restProps}){
    return (
        <Inner direction={direction}>
            <p>Hello again</p>
        </Inner>
    )
}


Jumbotron.Container = function JumbotronContainer({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}