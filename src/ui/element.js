import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Element extends React.Component {
    render() {
        if (!this.props.pdfFile === null || this.props.oggFile === null) {
            return null;
        }

        return (
            <div>
                <h3>{this.props.title}</h3>
                <p><a href={this.props.pdfFile}>kotta</a> </p>
                <ReactAudioPlayer
                    src={this.props.oggFile}
                    controls
                />
            </div>
        );
    }
}

export default Element;