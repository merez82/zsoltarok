import React from 'react';
import ReactDOM from 'react-dom';
import Tonus from './tonus';
import ColorProvider from './colorProvider';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let colorProvider = new  ColorProvider();
const tonusok = numbers.map((number) => <Tonus counter={number} colourClass={colorProvider.getColour()}/>);

ReactDOM.render(
    <React.Fragment>
        {tonusok}
    </React.Fragment>,
    document.getElementById('sidebar')
);