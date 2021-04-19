import React from 'react';
import ReactDOM from 'react-dom';
import Tonus from './ui/tonus';
import ColorProvider from './colorProvider';
import SingleElement from './ui/singleElement';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let colorProvider = new ColorProvider();
const tonusok = numbers.map(function (number, i) {
    return <Tonus counter={number} colourClass={colorProvider.getColour()} />
});

let nagybojtTitle = 'Nagyböjt: evangélium előtti ének';
let nagybojtOgg = 'nagybojt-evangelium-utan.ogg';
let nagybojtPdf = 'nagybojt-evangelium-utan.pdf';

ReactDOM.render(
    <React.Fragment>
        <SingleElement oggFileName={nagybojtOgg}
            pdfFileName={nagybojtPdf}
            title = {nagybojtTitle}
            colourClass={colorProvider.getColour()} />
        <React.Fragment>
            {tonusok}
        </React.Fragment>
    </React.Fragment>,
    document.getElementById('sidebar')
);