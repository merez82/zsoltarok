import React from 'react';
import Element from './element.js';
import getOgg, { getPdf } from '../dataRepository';

class SingleElement extends React.Component {
    render() {
        let oggFile = getOgg(this.props.oggFileName);
        let pdfFile = getPdf(this.props.pdfFileName);
        if (oggFile === null ||
            pdfFile === null) {
            return null;
        }

        let className = `w3-container ${this.props.colourClass}`;
        let emptyTitle = '';

        return <div className={className}>
            <h2>{this.props.title}</h2>
            <Element title={emptyTitle}
                pdfFile={pdfFile}
                oggFile={oggFile} />
        </div>
    }
}

export default SingleElement;