import React from 'react';
import Element from './element.js';
import oggs, { pdfs } from './dataRepository';

class Tonus extends React.Component {
    getFile(container, fileName) {
        try {
            return container[fileName].default;
        }
        catch {
            return null;
        }
    }

    render() {
        let zsoltarPdf = this.getFile(pdfs, `zsoltar-${this.props.counter}tonus.pdf`);
        let zsoltarOgg = this.getFile(oggs, `zsoltar-${this.props.counter}tonus.ogg`);
        let allelujaPdf = this.getFile(pdfs, `alleluja-${this.props.counter}tonus.pdf`);
        let allelujaOgg = this.getFile(oggs, `alleluja-${this.props.counter}tonus.ogg`);

        if ((zsoltarOgg === null ||
            zsoltarPdf === null) &&
            (allelujaPdf === null ||
            allelujaOgg === null)) {
            return null;
        }

        let className = `w3-container ${this.props.colourClass}`;
        let zsoltarElement = <Element title="Zsoltár"
            pdfFile={zsoltarPdf}
            oggFile={zsoltarOgg} />;

        let allelujaElement = <Element title="Alleluja"
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