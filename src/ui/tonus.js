import React from 'react';
import Element from './element.js';
import getOgg, { getPdf } from '../dataRepository';

class Tonus extends React.Component {
    render() {
        let zsoltarPdf = getPdf(`zsoltar-${this.props.counter}tonus.pdf`);
        let zsoltarOgg = getOgg(`zsoltar-${this.props.counter}tonus.ogg`);
        let allelujaPdf = getPdf(`alleluja-${this.props.counter}tonus.pdf`);
        let allelujaOgg = getOgg(`alleluja-${this.props.counter}tonus.ogg`);

        if ((zsoltarOgg === null ||
            zsoltarPdf === null) &&
            (allelujaPdf === null ||
            allelujaOgg === null)) {
            return null;
        }

        let className = `w3-container ${this.props.colourClass}`;
        let zsoltarElement = zsoltarPdf && <Element title="Zsoltár"
            pdfFile={zsoltarPdf}
            oggFile={zsoltarOgg} />;

        let allelujaElement = allelujaPdf && <Element title="Alleluja"
            pdfFile={allelujaPdf}
            oggFile={allelujaOgg} />;

        return (
            <div className={className}>
                <h2>{this.props.counter}. tónus</h2>
                {zsoltarElement}
                {allelujaElement}
            </div>
        );
    }
}

export default Tonus;